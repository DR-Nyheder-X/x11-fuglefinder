defmodule Birdie.BirdView do
  use Birdie.Web, :view

  def member_of_habitat? bird, habitat do
    case bird.habitats do
      %Ecto.Association.NotLoaded{} ->
        false
      habitats ->
        Enum.member?(Enum.map(habitats, fn h -> h.id end), habitat.id)
    end
  end

  def bird_image_url bird, size \\ :original do
    volume_path = Application.get_env(:birdie, :volume_path)
    Birdie.Picture.url({bird.picture, bird}, size)
    |> String.replace(volume_path, "")
  end

  def bird_image bird, size \\ :original do
    {:safe, "<img src='#{bird_image_url bird, size}'>"}
  end
end
