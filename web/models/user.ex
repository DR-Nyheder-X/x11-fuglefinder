defmodule Birdie.User do
  use Birdie.Web, :model
  import Ecto.Changeset, only: [cast: 3, validate_required: 2, put_change: 3]

  schema "users" do
    field :token, :string

    has_many :sightings, Birdie.Sighting
    has_many :birds, through: [:sightings, :bird]

    timestamps
  end

  @required_fields ~w(token)a
  @optional_fields ~w()a

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ %{}) do
    model
    |> cast(params, Enum.concat(@required_fields, @optional_fields))
    |> validate_required(@required_fields)
  end

  def create repo do
    changeset(%Birdie.User{}, %{token: SecureRandom.urlsafe_base64})
    |> repo.insert
  end
end
