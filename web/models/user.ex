defmodule Birdie.User do
  use Birdie.Web, :model
  import Ecto.Changeset, only: [cast: 4, put_change: 3]

  schema "users" do
    field :token, :string

    timestamps
  end

  @required_fields ~w(token)
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

  def create repo do
    changeset(%Birdie.User{}, %{token: SecureRandom.urlsafe_base64})
    |> repo.insert
  end
end
