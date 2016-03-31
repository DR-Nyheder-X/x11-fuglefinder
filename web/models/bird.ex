defmodule Birdie.Bird do
  use Birdie.Web, :model

  schema "birds" do
    field :name, :string
    field :latin_name, :string
    field :fact, :string
    field :wikipedia_url, :string
    field :rarity, :integer
    field :size, :string

    belongs_to :habitat, Birdie.Habitat

    timestamps
  end

  @required_fields ~w(name latin_name fact wikipedia_url rarity size)a
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
