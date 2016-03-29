defmodule Birdie.SightingController do
  use Birdie.Web, :controller

  alias Birdie.Sighting

  plug :scrub_params, "sighting" when action in [:create, :update]

  def index(conn, _params) do
    query = from s in Sighting,
      select: s,
      order_by: fragment("earth_distance(ll_to_earth(?, ?), ll_to_earth(?, ?))",
                         55.660211, 12.590790, s.lat, s.lng),
      limit: 10

    sightings = Repo.all(query)

    render(conn, "index.html", sightings: sightings)
  end

  def new(conn, _params) do
    changeset = Sighting.changeset(%Sighting{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"sighting" => sighting_params}) do
    changeset = Sighting.changeset(%Sighting{}, sighting_params)

    case Repo.insert(changeset) do
      {:ok, _sighting} ->
        conn
        |> put_flash(:info, "Sighting created successfully.")
        |> redirect(to: sighting_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    sighting = Repo.get!(Sighting, id)
    render(conn, "show.html", sighting: sighting)
  end

  def edit(conn, %{"id" => id}) do
    sighting = Repo.get!(Sighting, id)
    changeset = Sighting.changeset(sighting)
    render(conn, "edit.html", sighting: sighting, changeset: changeset)
  end

  def update(conn, %{"id" => id, "sighting" => sighting_params}) do
    sighting = Repo.get!(Sighting, id)
    changeset = Sighting.changeset(sighting, sighting_params)

    case Repo.update(changeset) do
      {:ok, sighting} ->
        conn
        |> put_flash(:info, "Sighting updated successfully.")
        |> redirect(to: sighting_path(conn, :show, sighting))
      {:error, changeset} ->
        render(conn, "edit.html", sighting: sighting, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    sighting = Repo.get!(Sighting, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(sighting)

    conn
    |> put_flash(:info, "Sighting deleted successfully.")
    |> redirect(to: sighting_path(conn, :index))
  end
end
