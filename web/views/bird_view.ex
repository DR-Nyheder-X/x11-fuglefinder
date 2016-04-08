defmodule Birdie.BirdView do
  use Birdie.Web, :view

  def member_of_habitat? bird, habitat do
    Enum.member?(Enum.map(bird.habitats, fn h -> h.id end), habitat.id)
  end

  def bird_image bird, size \\ :original do
    volume_path = Application.get_env(:birdie, :volume_path)
    path = Birdie.Picture.url({bird.picture, bird}, size)
            |> String.replace(volume_path, "")
    {:safe, "<img src='#{path}'>"}
  end
end
