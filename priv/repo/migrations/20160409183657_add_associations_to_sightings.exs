defmodule Birdie.Repo.Migrations.AddAssociationsToSightings do
  use Ecto.Migration

  def change do
    alter table(:sightings) do
      add :user_id, references(:users)
      add :bird_id, references(:birds)
    end
  end
end
