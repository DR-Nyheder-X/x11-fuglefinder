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

  @required_fields ~w(name latin_name fact wikipedia_url rarity size habitat_id)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
