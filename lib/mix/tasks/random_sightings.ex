defmodule Mix.Tasks.Birdie.RandomSightings do
  use Mix.Task
  alias Birdie.{Repo, User, Sighting, Bird}

  def run _args do
    Mix.Task.run "app.start", []

    {:ok, user} = User.create Repo
    birds = Repo.all(Bird)

    createRandomSighting = fn _ ->
      {lat, lng} = Birdie.SeedGen.coord

      Repo.insert! Sighting.changeset(%Sighting{}, %{
        lat: lat,
        lng: lng,
        user_id: user.id,
        bird_id: Enum.random(birds).id
      })
    end

    Enum.each(0..999, createRandomSighting)
  end
end
