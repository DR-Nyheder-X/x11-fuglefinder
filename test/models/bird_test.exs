defmodule Birdie.BirdTest do
  use Birdie.ModelCase
  alias Birdie.{Bird, Habitat}

  @valid_attrs %{
    fact: "some content",
    name: "some content",
    latin_name: "A",
    wikipedia_url: "B",
    rarity: 1,
    size: "s",
    picture: %Plug.Upload{path: "test/fixtures/example.png", filename: "example.png", content_type: "image/png"}
  }
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Bird.changeset(%Bird{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Bird.changeset(%Bird{}, @invalid_attrs)
    refute changeset.valid?
  end

  test "sets habitats by ids" do
    _habitat1 = Repo.insert! %Habitat{name: "One", slug: "a"}
    habitat2 = Repo.insert! %Habitat{name: "Two", slug: "b"}
    habitat3 = Repo.insert! %Habitat{name: "Three", slug: "c"}

    changeset = Bird.changeset(%Bird{}, Map.merge(@valid_attrs, %{
      habitat_ids: [habitat2.id, inspect(habitat3.id)]
    }))

    IO.inspect changeset

    assert changeset.valid?
    assert length(changeset.changes.habitats) == 2

    assert {:ok, _bird} = Repo.insert changeset
  end
end
