defmodule Birdie.BirdController do
  use Birdie.Web, :controller

  alias Birdie.Bird

  plug :scrub_params, "bird" when action in [:create, :update]

  def index(conn, _params) do
    query = from b in Bird, preload: [:habitats]
    birds = Repo.all(query)
    render(conn, "index.html", birds: birds)
  end

  def new(conn, _params) do
    changeset = Bird.changeset(%Bird{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"bird" => bird_params}) do
    changeset = Bird.changeset(%Bird{}, bird_params)

    case Repo.insert(changeset) do
      {:ok, _bird} ->
        conn
        |> put_flash(:info, "Bird created successfully.")
        |> redirect(to: admin_bird_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    bird = Repo.get!(Bird, id)
    render(conn, "show.html", bird: bird)
  end

  def edit(conn, %{"id" => id}) do
    bird = Repo.get!(Bird, id)
    changeset = Bird.changeset(bird)
    render(conn, "edit.html", bird: bird, changeset: changeset)
  end

  def update(conn, %{"id" => id, "bird" => bird_params}) do
    bird = Repo.get!(Bird, id)
    changeset = Bird.changeset(bird, bird_params)

    case Repo.update(changeset) do
      {:ok, bird} ->
        conn
        |> put_flash(:info, "Bird updated successfully.")
        |> redirect(to: admin_bird_path(conn, :show, bird))
      {:error, changeset} ->
        render(conn, "edit.html", bird: bird, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    bird = Repo.get!(Bird, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(bird)

    conn
    |> put_flash(:info, "Bird deleted successfully.")
    |> redirect(to: admin_bird_path(conn, :index))
  end
end
