alias Birdie.{Repo, Sighting}

IO.puts "Generating random entries"

createRandomSighting = fn _ ->
  {lat, lng} = Birdie.SeedGen.coord
  Repo.insert! Sighting.changeset(%Sighting{}, %{lat: lat, lng: lng})
end

Enum.each(0..99, createRandomSighting)
