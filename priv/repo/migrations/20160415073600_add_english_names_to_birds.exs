defmodule Birdie.Repo.Migrations.AddEnglishNamesToBirds do
  use Ecto.Migration

  def change do
    alter table(:birds) do
      add :english_name, :string
    end
  end
end
