defmodule Birdie.Api.V1.BirdControllerTest do
  use Birdie.ConnCase
  alias Birdie.{Repo, User, Bird, Habitat}

  test "GET index with no habitat", %{conn: conn} do
    Repo.insert! %Bird{name: "John"}
    Repo.insert! %Bird{name: "Aage"}

    conn = get conn, api_v1_bird_path(conn, :index)

    resp = json_response(conn, 200)
    assert length(resp["data"]) == 2
    assert is_nil(resp["habitat"])
  end

  test "GET index with habitat", %{conn: conn} do
    habitat = Repo.insert! %Habitat{slug: "yuck"}
    bird1 = cast(%Bird{}, %{name: "Yes"}, [:name])
            |> Ecto.Changeset.put_assoc(:habitats, [habitat])
            |> Repo.insert!
    Repo.insert! %Bird{name: "No!"}

    conn = get conn, api_v1_bird_path(conn, :index, habitat: habitat.slug)

    resp = json_response(conn, 200)
    assert length(resp["data"]) == 1
    assert List.first(resp["data"])["name"] == bird1.name
    assert resp["habitat"] == habitat.slug
  end
end
