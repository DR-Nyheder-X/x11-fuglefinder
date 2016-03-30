defmodule Birdie.PageController do
  use Birdie.Web, :controller

  plug :put_layout, false

  def index(conn, _params) do
    conn |> render("index.html")
  end
end
