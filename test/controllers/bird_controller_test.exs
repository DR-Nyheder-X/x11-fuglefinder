defmodule Birdie.BirdControllerTest do
  use Birdie.ConnCase

  alias Birdie.Bird

  @valid_attrs %{
    fact: "some content",
    name: "some content",
    latin_name: "A",
    wikipedia_url: "B",
    rarity: 1,
    size: "s"
  }
  @invalid_attrs %{}

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, admin_bird_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing birds"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, admin_bird_path(conn, :new)
    assert html_response(conn, 200) =~ "New bird"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, admin_bird_path(conn, :create), bird: @valid_attrs
    assert redirected_to(conn) == admin_bird_path(conn, :index)
    assert Repo.get_by(Bird, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, admin_bird_path(conn, :create), bird: @invalid_attrs
    assert html_response(conn, 200) =~ "New bird"
  end

  test "shows chosen resource", %{conn: conn} do
    bird = Repo.insert! %Bird{}
    conn = get conn, admin_bird_path(conn, :show, bird)
    assert html_response(conn, 200) =~ "Show bird"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, admin_bird_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    bird = Repo.insert! %Bird{}
    conn = get conn, admin_bird_path(conn, :edit, bird)
    assert html_response(conn, 200) =~ "Edit bird"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    bird = Repo.insert! %Bird{}
    conn = put conn, admin_bird_path(conn, :update, bird), bird: @valid_attrs
    assert redirected_to(conn) == admin_bird_path(conn, :show, bird)
    assert Repo.get_by(Bird, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    bird = Repo.insert! %Bird{}
    conn = put conn, admin_bird_path(conn, :update, bird), bird: @invalid_attrs
    assert html_response(conn, 200) =~ "Edit bird"
  end

  test "deletes chosen resource", %{conn: conn} do
    bird = Repo.insert! %Bird{}
    conn = delete conn, admin_bird_path(conn, :delete, bird)
    assert redirected_to(conn) == admin_bird_path(conn, :index)
    refute Repo.get(Bird, bird.id)
  end
end
