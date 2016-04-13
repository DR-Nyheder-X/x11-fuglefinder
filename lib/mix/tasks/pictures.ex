defmodule Mix.Tasks.Birdie.Pictures do
  use Mix.Task
  alias Birdie.{Repo, Bird}
  import Ecto.Query, only: [from: 2]

  @pic_dir "./resources/pictures/"

  def run _args do
    Mix.Task.run "app.start", []

    {:ok, files} = File.ls(@pic_dir)

    query = from b in Bird, where: is_nil(b.picture)

    Enum.each(Repo.all(query), fn bird ->
      update_bird_with_files(files, bird)
    end)
  end

  defp update_bird_with_files files, bird do
    name = String.downcase(bird.name)

    case Enum.find(files, fn f -> f == suspected_filename(name) end) do
      nil -> nil
      file -> bird |> assign_picture(file) |> Repo.update
    end
  end

  defp assign_picture(bird, filename) do
    upload = %Plug.Upload{
      path: "#{@pic_dir}#{filename}",
      filename: filename,
      content_type: "image/jpeg"
    }

    bird |> Bird.changeset(%{picture: upload})
  end

  defp suspected_filename name do
    String.replace("#{name}.jpg", " ", "_")
  end
end
