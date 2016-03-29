defmodule Birdie.SightingTest do
  use Birdie.ModelCase

  alias Birdie.Sighting

  @valid_attrs %{lat: "120.5", lng: "120.5"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Sighting.changeset(%Sighting{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Sighting.changeset(%Sighting{}, @invalid_attrs)
    refute changeset.valid?
  end
end
