defmodule Birdie.Repo.Migrations.CreateHabitat do
  use Ecto.Migration

  def change do
    create table(:habitats) do
      add :name, :string

      timestamps
    end

  end
end
