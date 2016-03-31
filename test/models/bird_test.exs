defmodule Birdie.BirdTest do
  use Birdie.ModelCase
  alias Birdie.Bird

  @valid_attrs %{fact: "some content", name: "some content", latin_name: "A", wikipedia_url: "B", rarity: 1, size: "s"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Bird.changeset(%Bird{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Bird.changeset(%Bird{}, @invalid_attrs)
    refute changeset.valid?
  end
end
