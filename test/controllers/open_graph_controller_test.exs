defmodule Birdie.OpenGraphControllerTest do
  use Birdie.ConnCase
  import Birdie.Factory
  alias Birdie.{Repo, User}

  test "GET user" do
    {:ok, user} = User.create Repo
    conn = get conn, open_graph_path(conn, :user, user.id)
    assert html_response(conn, 200) =~ ~r{Ikke for at prale}
  end

  test "GET bird" do
    bird = create :bird, name: "John"
    conn = get conn, open_graph_path(conn, :bird, bird.id)
    assert html_response(conn, 200) =~ ~r{John}
  end
end
