# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :birdie, Birdie.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "mxIThbQuBa05MURE+7FFaTiP2LngHS3V7s+6QkG7b4jDKq0KjoqOf2sEyBN+W0ki",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Birdie.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :arc,
  bucket: "brnbw-drex"

config :birdie, ecto_repos: [Birdie.Repo]
