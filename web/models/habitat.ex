defmodule Birdie.Habitat do
  use Birdie.Web, :model

  schema "habitats" do
    field :name, :string
    field :slug, :string

    many_to_many :birds, Birdie.Bird, join_through: "birds_habitats"

    timestamps
  end

  @required_fields ~w(name slug)a
  @optional_fields ~w()a

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ %{}) do
    model
    |> cast(params, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
  end
end
