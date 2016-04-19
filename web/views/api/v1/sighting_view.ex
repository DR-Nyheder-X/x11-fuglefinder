defmodule Birdie.Api.V1.SightingView do
  use Birdie.Web, :view

  def render "index.json", %{sightings: sightings} do
    %{
      data: render_many(sightings, __MODULE__, "sighting.json"),
    }
  end

  def render "sighting.json", %{sighting: sighting} do
    %{
      lat: sighting.lat,
      lng: sighting.lng
    }
  end

end
