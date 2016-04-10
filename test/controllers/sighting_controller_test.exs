defmodule Birdie.SightingControllerTest do
  use Birdie.ConnCase
  import Birdie.Factory

  alias Birdie.Sighting

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, admin_sighting_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing sightings"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, admin_sighting_path(conn, :new)
    assert html_response(conn, 200) =~ "New sighting"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, admin_sighting_path(conn, :create), sighting: fields_for(:sighting)
    assert redirected_to(conn) == admin_sighting_path(conn, :index)
    # assert Repo.get_by(Sighting, fields_for(:sighting))
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, admin_sighting_path(conn, :create), sighting: %{}
    assert html_response(conn, 200) =~ "New sighting"
  end

  test "shows chosen resource", %{conn: conn} do
    sighting = create(:sighting)
    conn = get conn, admin_sighting_path(conn, :show, sighting)
    assert html_response(conn, 200) =~ "Show sighting"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, admin_sighting_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    sighting = create(:sighting)
    conn = get conn, admin_sighting_path(conn, :edit, sighting)
    assert html_response(conn, 200) =~ "Edit sighting"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    sighting = create(:sighting)
    conn = put conn, admin_sighting_path(conn, :update, sighting), sighting: fields_for(:sighting)
    assert redirected_to(conn) == admin_sighting_path(conn, :show, sighting)
    # assert Repo.get_by(Sighting, fields_for(:sighting))
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    sighting = create(:sighting)
    conn = put conn, admin_sighting_path(conn, :update, sighting), sighting: %{user_id: nil}
    assert html_response(conn, 200) =~ "Edit sighting"
  end

  test "deletes chosen resource", %{conn: conn} do
    sighting = create(:sighting)
    conn = delete conn, admin_sighting_path(conn, :delete, sighting)
    assert redirected_to(conn) == admin_sighting_path(conn, :index)
    refute Repo.get(Sighting, sighting.id)
  end
end
