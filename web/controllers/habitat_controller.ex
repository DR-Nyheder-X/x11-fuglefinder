defmodule Birdie.HabitatController do
  use Birdie.Web, :controller

  alias Birdie.Habitat

  plug :scrub_params, "habitat" when action in [:create, :update]

  def index(conn, _params) do
    habitats = Repo.all(Habitat)
    render(conn, "index.html", habitats: habitats)
  end

  def new(conn, _params) do
    changeset = Habitat.changeset(%Habitat{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"habitat" => habitat_params}) do
    changeset = Habitat.changeset(%Habitat{}, habitat_params)

    case Repo.insert(changeset) do
      {:ok, _habitat} ->
        conn
        |> put_flash(:info, "Habitat created successfully.")
        |> redirect(to: admin_habitat_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    habitat = Repo.get!(Habitat, id)
    render(conn, "show.html", habitat: habitat)
  end

  def edit(conn, %{"id" => id}) do
    habitat = Repo.get!(Habitat, id)
    changeset = Habitat.changeset(habitat)
    render(conn, "edit.html", habitat: habitat, changeset: changeset)
  end

  def update(conn, %{"id" => id, "habitat" => habitat_params}) do
    habitat = Repo.get!(Habitat, id)
    changeset = Habitat.changeset(habitat, habitat_params)

    case Repo.update(changeset) do
      {:ok, habitat} ->
        conn
        |> put_flash(:info, "Habitat updated successfully.")
        |> redirect(to: admin_habitat_path(conn, :show, habitat))
      {:error, changeset} ->
        render(conn, "edit.html", habitat: habitat, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    habitat = Repo.get!(Habitat, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(habitat)

    conn
    |> put_flash(:info, "Habitat deleted successfully.")
    |> redirect(to: admin_habitat_path(conn, :index))
  end
end
