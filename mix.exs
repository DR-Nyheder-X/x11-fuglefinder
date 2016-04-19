defmodule Birdie.Mixfile do
  use Mix.Project

  def project do
    [app: :birdie,
     version: "0.0.1",
     elixir: "~> 1.0",
     elixirc_paths: elixirc_paths(Mix.env),
     compilers: [:phoenix, :gettext] ++ Mix.compilers,
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     aliases: aliases,
     deps: deps]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [mod: {Birdie, []},
     applications: [:phoenix, :phoenix_html, :cowboy, :logger, :gettext,
                    :phoenix_ecto, :postgrex, :httpoison, :ex_aws]]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "web", "test/support"]
  defp elixirc_paths(_),     do: ["lib", "web"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.1.4"},
      {:postgrex, ">= 0.0.0"},
      {:phoenix_ecto, "~> 3.0.0-rc.0"},
      {:phoenix_html, "~> 2.4"},
      {:phoenix_live_reload, "~> 1.0", only: :dev},
      {:gettext, "~> 0.9"},
      {:cowboy, "~> 1.0"},

      {:secure_random, "~> 0.2"},
      {:credo, "~> 0.3", only: [:dev, :test]},
      {:httpoison, "~> 0.8.0"},
      {:short_maps, github: "whatyouhide/short_maps"},
      {:csv, "~> 1.4.0"},
      {:arc, "~> 0.5.1"},
      {:arc_ecto, github: "mikker/arc_ecto"},
      {:ex_aws, "~> 0.4.10"},
      {:ex_machina, "~> 0.6.1", only: [:test]},
      {:corsica, "~> 0.4"}
    ]
  end

  # Aliases are shortcut or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.setup": ["ecto.create", "ecto.migrate", "ecto.seed"],
      "ecto.seed": ["run priv/repo/seeds.exs", "birdie.import"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      "phoenix.digest": ["birdie.digest", "phoenix.digest"]
    ]
  end
end
