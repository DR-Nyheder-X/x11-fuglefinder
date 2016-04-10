defmodule Birdie.Factory do
  use ExMachina.Ecto, repo: Birdie.Repo

  def factory(:user) do
    %Birdie.User{
      token: "omg_so_secret"
    }
  end

  def factory(:bird) do
    %Birdie.Bird{
      name: "Skrydsnæppet finstjært",
      latin_name: "Loksikum Maximum",
      fact: "Lever på engen, vildkat i sengen",
      wikipedia_url: "https://",
      rarity: Enum.random(1..5),
      size: Enum.random(~w(S M L)),
      habitats: [build(:habitat)]
    }
  end

  def factory(:habitat) do
    %Birdie.Habitat{
      name: "Eng",
      slug: "eng"
    }
  end

  def factory(:sighting) do
    %Birdie.Sighting{
      lat: 5.1234,
      lng: 5.1234,
      user_id: create(:user).id,
      bird_id: create(:bird).id
    }
  end
end
