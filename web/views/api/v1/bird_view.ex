defmodule Birdie.Api.V1.BirdView do
  use Birdie.Web, :view
  import Birdie.BirdView, only: [bird_image_url: 2]

  def render "index.json", %{birds: birds, habitat: habitat} do
    %{
      data: render_many(birds, __MODULE__, "bird.json"),
      habitat: habitat && habitat.slug
    }
  end

  def render "show.json", %{bird: bird} do
    %{data: render_one(bird, __MODULE__, "bird.json")}
  end

  def render "basic_bird.json", %{bird: bird} do
    basic_attrs(bird)
  end

  def render "bird.json", %{bird: bird} do
    Map.merge(basic_attrs(bird), %{
      habitats: Enum.map(bird.habitats, &(&1.slug))
    })
  end

  defp basic_attrs bird do
    %{
      id: bird.id,
      name: bird.name,
      latin_name: bird.latin_name,
      english_name: bird.english_name,
      fact: bird.fact,
      wikipedia_url: bird.wikipedia_url,
      rarity: bird.rarity,
      size: bird.size,
      picture: pictures_for(bird)
    }
  end

  defp pictures_for bird do
    host = Application.get_env(:birdie, :host)

    Enum.reduce(Birdie.Picture.versions, %{}, fn (vers, map) ->
      Map.put(map, vers, "#{host}#{bird_image_url(bird, vers)}")
    end)
  end
end
