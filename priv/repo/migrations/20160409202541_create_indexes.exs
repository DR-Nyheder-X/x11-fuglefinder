defmodule Birdie.Repo.Migrations.CreateIndexes do
  use Ecto.Migration

  def change do
    create index :sightings, [:user_id, :bird_id], unique: true
    create index :birds_habitats, [:bird_id, :habitat_id]
  end
end
