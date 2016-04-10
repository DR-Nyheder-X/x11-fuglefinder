defmodule Birdie.Api.V1.CurrentUserControllerTest do
  use Birdie.ConnCase

  test "POST create" do
    conn = post conn, api_v1_current_user_path(conn, :create)

    assert %{"user" => _} = json_response(conn, 201)
  end

  test "GET show with header" do
    {:ok, user} = Birdie.User.create Birdie.Repo

    conn = conn
            |> sign_in(user)
            |> get(api_v1_current_user_path(conn, :show))

    resp = json_response(conn, 200)
    assert %{"user" => _} = resp
    assert get_in(resp, ["user", "token"]) == user.token
  end

  test "GET show without header" do
    conn = get(conn, api_v1_current_user_path(conn, :show))
    assert "unauthorized" == response(conn, 401)
  end

  test "GET show with bad header" do
    conn = conn
    |> sign_in(%Birdie.User{token: "monkeyface"})
    |> get(api_v1_current_user_path(conn, :show))

    assert "unauthorized" == response(conn, 401)
  end
end
