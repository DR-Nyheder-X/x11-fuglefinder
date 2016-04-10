defmodule Birdie.SightingTest do
  use Birdie.ModelCase
  import Birdie.Factory

  alias Birdie.Sighting

  test "changeset with valid attributes" do
    changeset = Sighting.changeset(%Sighting{}, fields_for(:sighting))
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Sighting.changeset(%Sighting{}, %{})
    refute changeset.valid?
  end
end
