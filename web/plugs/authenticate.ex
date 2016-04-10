defmodule Birdie.Plugs.Authenticate do
  import Plug.Conn
  alias Birdie.{Repo, User}

  def init(opts), do: opts

  def call conn, _opts do
    case fetch_user(conn) do
      {:ok, user} ->
        conn
        |> assign(:current_user, user)
      {:error, _} ->
        conn
        |> send_resp(401, "unauthorized")
        |> halt
    end
  end

  defp fetch_user conn do
    case get_auth_token(conn) |> find_user do
      nil -> {:error, nil}
      user -> {:ok, user}
    end
  end

  defp get_auth_token conn do
    str = List.first(get_req_header(conn, "authentication"))
    str && List.last(String.split(str, " "))
  end

  defp find_user token do
    token && Repo.get_by(User, token: token)
  end
end
