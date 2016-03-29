defmodule Birdie.Repo.Migrations.SetupLocation do
  use Ecto.Migration

  def up do
    execute "CREATE EXTENSION cube;"
    execute "CREATE EXTENSION earthdistance;"
  end
end
