defmodule Birdie.Api.V1.SightingController do
  use Birdie.Web, :controller
  alias Birdie.Sighting

  plug Birdie.Plugs.Authenticate when action in [:create, :delete]

  def create conn, bird_params do
    changeset = Sighting.changeset(%Sighting{}, Map.merge(bird_params, %{
      "user_id" => conn.assigns.current_user.id
    }))

    case Repo.insert(changeset) do
      {:ok, _sighting} ->
        conn
        |> put_status(:created)
        |> json("")
      {:error, reason} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("errors.json", error: reason)
    end
  end

  def delete conn, %{"bird_id" => bird_id} do
    sighting = Repo.get_by!(Sighting, [
      bird_id: bird_id,
      user_id: conn.assigns.current_user.id
    ])

    Repo.delete! sighting

    conn |> json("")
  end
end
