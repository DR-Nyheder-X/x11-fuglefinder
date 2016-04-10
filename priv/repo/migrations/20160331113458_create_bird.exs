defmodule Birdie.Repo.Migrations.CreateBird do
  use Ecto.Migration

  def change do
    create table(:birds) do
      add :name, :string
      add :latin_name, :string
      add :fact, :string
      add :wikipedia_url, :string
      add :rarity, :integer
      add :size, :string
      add :picture, :string

      timestamps
    end
  end
end
