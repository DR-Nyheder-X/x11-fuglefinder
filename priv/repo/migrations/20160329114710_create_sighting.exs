defmodule Birdie.Repo.Migrations.CreateSighting do
  use Ecto.Migration

  def change do
    create table(:sightings) do
      add :lat, :float
      add :lng, :float

      timestamps
    end

  end
end
