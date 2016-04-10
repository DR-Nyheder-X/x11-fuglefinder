defmodule Birdie.Repo.Migrations.CreateBirdsHabitats do
  use Ecto.Migration

  def change do
    create table(:birds_habitats) do
      add :bird_id, references(:birds)
      add :habitat_id, references(:habitats)
    end
  end
end
