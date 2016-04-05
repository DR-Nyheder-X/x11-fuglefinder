defmodule Birdie.Repo.Migrations.CreateHabitat do
  use Ecto.Migration

  def change do
    create table(:habitats) do
      add :name, :string
      add :slug, :string

      timestamps
    end

  end
end
