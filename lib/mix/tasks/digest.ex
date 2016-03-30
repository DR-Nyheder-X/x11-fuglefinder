defmodule Mix.Tasks.Birdie.Digest do
  use Mix.Task

  def run(_args) do
    Mix.Shell.IO.cmd "NODE_ENV=production $(npm bin)/webpack -p"
  end
end

