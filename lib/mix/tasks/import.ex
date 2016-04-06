defmodule Mix.Tasks.Birdie.Import do
  use Mix.Task
  alias Birdie.{Repo, Bird, Habitat}
  import ShortMaps

  @repo "https://docs.google.com/spreadsheets/d/1O5ip1kUvPuGNwfe422DuuAGC-75AEuiLkqSHM_pk8E0/pub?output=csv"
  @slug_transformations %{
    "kyst" => "coast",
    "dyrket land" => "farmland",
    "enge" => "meadows",
    "hede" => "moore",
    "skov" => "woods",
    "by" => "city",
    "søer og vandløb" => "water"
  }

  def run(_args) do
    Mix.Task.run "app.start", []

    Enum.each Repo.all(Bird), &Repo.delete/1

    fetch_repo
    |> Enum.each(fn line -> insert_bird(line) end)
  end

  defp insert_bird line do
    [ _, name, latin_name, _, wikipedia_url,
      rarity, size, habitats, fact ] = Enum.take(line, 9)

    attrs = ~m(name latin_name wikipedia_url rarity size fact)a
            |> format_rarity

    habitats = find_habitats habitats

    changeset = Bird.changeset(%Bird{}, attrs)
    |> Ecto.Changeset.put_assoc(:habitats, habitats)

    if changeset.valid? do
      Repo.insert! changeset
    else
      IO.inspect changeset
      IO.inspect changeset.errors
    end
  end

  defp fetch_repo do
    %HTTPoison.Response{body: body} = HTTPoison.get!(@repo)
    String.split(body, "\r\n")
    |> Enum.drop(2) # headers
    |> CSV.decode
  end

  defp format_rarity attrs do
    rarity = case Integer.parse(attrs.rarity) do
      :error -> nil
      {rarity, _} -> rarity
    end

    Map.put(attrs, :rarity, rarity)
  end

  defp find_habitats habitats do
    IO.puts habitats
    habitats
    |> String.downcase
    |> String.split(",")
    |> Enum.map(&lookup_habitat/1)
    # |> Enum.reject(&is_nil/1)
  end

  defp lookup_habitat slug do
    if slug = normalize_slug(slug) do
      Repo.get_by Habitat, slug: slug
    end
  end

  defp normalize_slug slug do
    Map.get(@slug_transformations, String.strip(slug))
  end
end

