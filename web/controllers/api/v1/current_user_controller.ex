defmodule Birdie.Api.V1.CurrentUserController do
  use Birdie.Web, :controller
  alias Birdie.User

  plug :put_view, Birdie.Api.V1.UserView
  plug Birdie.Plugs.Authenticate when action in [:show]

  def create conn, _params do
    case User.create Repo do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> render("show.json", user: user |> preloads)
      {:error, error} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render("error.json", error: error)
    end
  end

  def show conn, _params do
    user = conn.assigns.current_user |> preloads
    render conn, "show.json", user: user
  end

  defp preloads record do
    Repo.preload(record, birds: :habitats)
  end
end
