defmodule Birdie.Bird do
  use Birdie.Web, :model
  alias Birdie.{Repo, Habitat}
  use Arc.Ecto.Model

  schema "birds" do
    field :name, :string
    field :latin_name, :string
    field :fact, :string
    field :wikipedia_url, :string
    field :rarity, :integer
    field :size, :string
    field :picture, Birdie.Picture.Type
    field :habitat_ids, {:array, :integer}, virtual: true

    many_to_many :habitats, Birdie.Habitat,
      join_through: "birds_habitats",
      on_delete: :delete_all,
      on_replace: :delete

    has_many :sightings, Birdie.Sighting
    has_many :users, through: [:sightings, :user]

    timestamps
  end

  @required_fields ~w(name latin_name wikipedia_url rarity size fact)a
  @optional_fields ~w(habitat_ids)a
  @allowed_upload_fields ~w(picture)a

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ %{}) do
    model
    |> cast(params, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
    |> cast_attachments(params, @allowed_upload_fields)
    |> assoc_habitats
  end

  defp assoc_habitats set do
    if Map.has_key?(set.changes, :habitat_ids) do
      put_assoc(set, :habitats, Enum.map(set.changes.habitat_ids, fn id ->
        Habitat.changeset Repo.get!(Habitat, id), %{}
      end))
    else
      set
    end
  end
end
