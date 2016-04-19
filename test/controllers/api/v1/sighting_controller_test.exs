defmodule Controllers.Api.V1.SightingControllerTest do
  use Birdie.ConnCase
  alias Birdie.Sighting
  import Birdie.Factory

  test "GET index with lat lng" do
    conn = get conn, api_v1_sighting_path(conn, :index, lat: "1.0", lng: "1.0")
    assert %{"data" => data} = json_response(conn, 200)
    assert length(data) == 0
  end

  test "POST create as anon" do
    conn = post conn, api_v1_sighting_path(conn, :create, bird_id: 1)
    assert response(conn, 401) == "unauthorized"
  end

  test "POST create creates a sighting" do
    user = create(:user)
    bird = create(:bird)

    conn = conn
            |> sign_in(user)
            |> post(api_v1_sighting_path(conn, :create, bird_id: bird.id))

    assert response(conn, 201)
    user = Ecto.Query.last(Birdie.User) |> Repo.one |> Repo.preload(:birds)
    assert Enum.member?(Enum.map(user.birds, &(&1.id)), bird.id)
  end

  test "DELETE delete deletes a sighting" do
    user = create(:user)
    bird = create(:bird)
    sighting = %Sighting{user_id: user.id, bird_id: bird.id}
                |> Repo.insert!

    conn = conn
            |> sign_in(user)
            |> delete(api_v1_sighting_path(conn, :delete, bird_id: bird.id))

    assert json_response(conn, 200) == ""
    refute Repo.get_by Sighting, id: sighting.id
  end
end
