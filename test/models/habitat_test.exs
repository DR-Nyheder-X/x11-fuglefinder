defmodule Birdie.HabitatTest do
  use Birdie.ModelCase

  alias Birdie.Habitat

  @valid_attrs %{name: "some content", slug: "donna"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Habitat.changeset(%Habitat{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Habitat.changeset(%Habitat{}, @invalid_attrs)
    refute changeset.valid?
  end
end
