defmodule Mix.Tasks.Birdie.English do
  use Mix.Task
  alias Birdie.{Repo, Bird}
  import Ecto.Query, only: [from: 2]

  @repo "https://docs.google.com/spreadsheets/d/1O5ip1kUvPuGNwfe422DuuAGC-75AEuiLkqSHM_pk8E0/pub?output=csv"

  def run(_args) do
    Mix.Task.run "app.start", []

    fetch_repo
    |> Enum.each(&update_english_name/1)
  end

  defp update_english_name line do
    [ _, _name, _latin_name, english, wikipedia_url ] = Enum.take(line, 5)

    query = from(b in Bird, where: [wikipedia_url: ^wikipedia_url])

    Enum.each(Repo.all(query), fn bird ->
      Bird.changeset(bird, %{english_name: english}) |> Repo.update!
    end)
  end

  defp fetch_repo do
    %HTTPoison.Response{body: body} = HTTPoison.get!(@repo)
    String.split(body, "\r\n")
    |> Enum.drop(2) # headers
    |> CSV.decode
  end
end

