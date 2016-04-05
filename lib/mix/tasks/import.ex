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

    cached_habitats = Repo.all(Habitat)

    fetch_repo
    |> Enum.each(fn line -> insert_bird(line, cached_habitats) end)
  end

  defp insert_bird line, cached_habitats do
    [ _, name, latin_name, _, wikipedia_url,
      rarity, size, habitats, fact ] = Enum.take(line, 9)

    attrs = ~m(name latin_name wikipedia_url rarity size fact)a
            |> format_rarity

    habitats = find_habitats attrs, cached_habitats, habitats

    changeset = Bird.changeset(%Bird{}, attrs)
    |> Ecto.Changeset.put_assoc(:habitats, habitats)

    if changeset.valid? do
      Repo.insert! changeset
    end
  end

  defp insert_all_birds birds do
    Repo.insert_all Bird, birds
  end

  defp fetch_repo do
    %HTTPoison.Response{body: body} = HTTPoison.get!(@repo)

    lines = String.split(body, "\r\n")
            |> Enum.drop(2)

    Enum.map(lines, &(String.split &1, ","))
  end

  defp format_rarity attrs do
    rarity = case Integer.parse(attrs.rarity) do
      :error -> nil
      {rarity, _} -> rarity
    end

    Map.put(attrs, :rarity, rarity)
  end

  defp find_habitats attrs, cached_habitats, habitats do
    habitats = habitats
    |> String.downcase
    |> String.replace("\"", "")
    |> String.split(",")
    |> Enum.map(&(lookup_habitat(cached_habitats, &1)))
    |> Enum.reject(&is_nil/1)
  end

  defp lookup_habitat habitats, slug do
    if slug = normalize_slug(slug) do
      Repo.get_by Habitat, slug: slug
    end
  end

  defp normalize_slug slug do
    Map.get(@slug_transformations, slug)
  end
end

