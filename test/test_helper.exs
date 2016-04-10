{:ok, _} = Application.ensure_all_started(:ex_machina)

ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Birdie.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Birdie.Repo --quiet)
Ecto.Adapters.SQL.Sandbox.mode(Birdie.Repo, :manual)

