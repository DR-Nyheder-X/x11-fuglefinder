use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :birdie, Birdie.Endpoint,
  http: [port: 4001],
  server: false

config :birdie,
  volume_path: "/tmp",
  host: "http://example.com"

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :birdie, Birdie.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "birdie_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
