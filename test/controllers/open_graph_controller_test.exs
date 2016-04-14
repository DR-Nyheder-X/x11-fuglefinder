defmodule Birdie.OpenGraphControllerTest do
  use Birdie.ConnCase
  import Birdie.Factory
  alias Birdie.{Repo, User}

  test "GET index with user id" do
    {:ok, user} = User.create Repo
    conn = get conn, open_graph_path(conn, :index, id: user.id)
    assert html_response(conn, 200)
  end

  test "GET index" do
    conn = get conn, open_graph_path(conn, :index)
    assert redirected_to(conn, 302) == "/"
  end

  test "GET show with bird" do
    bird = create :bird
    conn = get conn, open_graph_path(conn, :show, bird.id)
    assert html_response(conn, 200)
  end
end
