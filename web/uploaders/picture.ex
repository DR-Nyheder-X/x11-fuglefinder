defmodule Birdie.Picture do
  use Arc.Definition

  # Include ecto support (requires package arc_ecto installed):
  use Arc.Ecto.Definition

  def __storage, do: Arc.Storage.Local

  @versions [:original, :list, :tile, :single]

  def versions, do: @versions

  # Whitelist file extensions:
  def validate({file, _}) do
    ~w(.jpg .jpeg .gif .png) |> Enum.member?(Path.extname(file.file_name))
  end

  defp squared(size) do
    "-strip -thumbnail #{size}x#{size}^ -gravity center -extent #{size}x#{size} -format jpg"
  end

  def transform(:list, _), do: {:convert, squared(100), :jpg}
  def transform(:tile, _), do: {:convert, squared(250), :jpg}
  def transform(:single, _), do: {:convert, squared(500), :jpg}

  # Override the persisted filenames:
  def filename(version, _) do
    version
  end

  # Override the storage directory:
  def storage_dir(_version, {_file, scope}) do
    dir = Application.get_env(:birdie, :volume_path)
    "#{dir}/pictures/#{scope.id}"
  end

  # Provide a default URL if there hasn't been a file uploaded
  def default_url(:list, _), do: "https://placehold.it/100x100"
  def default_url(:tile, _), do: "https://placehold.it/250x250"
  def default_url(:single, _), do: "https://placehold.it/500x500"
  def default_url(_, _), do: "https://placehold.it/500x500"

  # Specify custom headers for s3 objects
  # Available options are [:cache_control, :content_disposition,
  #    :content_encoding, :content_length, :content_type,
  #    :expect, :expires, :storage_class, :website_redirect_location]
  #
  # def s3_object_headers(version, {file, scope}) do
  #   [content_type: Plug.MIME.path(file.file_name)]
  # end
end
