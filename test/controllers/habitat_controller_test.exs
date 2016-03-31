defmodule Birdie.HabitatControllerTest do
  use Birdie.ConnCase

  alias Birdie.Habitat
  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, admin_habitat_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing habitats"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, admin_habitat_path(conn, :new)
    assert html_response(conn, 200) =~ "New habitat"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, admin_habitat_path(conn, :create), habitat: @valid_attrs
    assert redirected_to(conn) == admin_habitat_path(conn, :index)
    assert Repo.get_by(Habitat, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, admin_habitat_path(conn, :create), habitat: @invalid_attrs
    assert html_response(conn, 200) =~ "New habitat"
  end

  test "shows chosen resource", %{conn: conn} do
    habitat = Repo.insert! %Habitat{}
    conn = get conn, admin_habitat_path(conn, :show, habitat)
    assert html_response(conn, 200) =~ "Show habitat"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, admin_habitat_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    habitat = Repo.insert! %Habitat{}
    conn = get conn, admin_habitat_path(conn, :edit, habitat)
    assert html_response(conn, 200) =~ "Edit habitat"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    habitat = Repo.insert! %Habitat{}
    conn = put conn, admin_habitat_path(conn, :update, habitat), habitat: @valid_attrs
    assert redirected_to(conn) == admin_habitat_path(conn, :show, habitat)
    assert Repo.get_by(Habitat, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    habitat = Repo.insert! %Habitat{}
    conn = put conn, admin_habitat_path(conn, :update, habitat), habitat: @invalid_attrs
    assert html_response(conn, 200) =~ "Edit habitat"
  end

  test "deletes chosen resource", %{conn: conn} do
    habitat = Repo.insert! %Habitat{}
    conn = delete conn, admin_habitat_path(conn, :delete, habitat)
    assert redirected_to(conn) == admin_habitat_path(conn, :index)
    refute Repo.get(Habitat, habitat.id)
  end
end
