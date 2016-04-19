alias Birdie.{Repo, Habitat}

IO.puts "## Creating Habitats"

Repo.delete_all(Habitat)

habitats = %{
  coast: "Kyst",
  farmland: "Dyrket land",
  meadows: "Åbent land",
  moore: "Hede",
  woods: "Skov",
  city: "By",
  water: "Søer og vandløb"
}

habitats |> Enum.each(fn {key, val} ->
  Repo.insert! struct(Habitat, %{name: val, slug: Atom.to_string(key)})
end)

