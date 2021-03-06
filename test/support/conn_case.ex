defmodule Birdie.ConnCase do
  @moduledoc """
  This module defines the test case to be used by
  tests that require setting up a connection.

  Such tests rely on `Phoenix.ConnTest` and also
  imports other functionality to make it easier
  to build and query models.

  Finally, if the test case interacts with the database,
  it cannot be async. For this reason, every test runs
  inside a transaction which is reset at the beginning
  of the test unless the test case is marked as async.
  """

  use ExUnit.CaseTemplate

  using do
    quote do
      # Import conveniences for testing with connections
      use Phoenix.ConnTest

      alias Birdie.Repo
      import Ecto
      import Ecto.Changeset
      import Ecto.Query, only: [from: 1, from: 2]

      import Birdie.Router.Helpers

      # The default endpoint for testing
      @endpoint Birdie.Endpoint

      def sign_in conn, user do
        put_req_header(conn, "authentication", "Bearer #{user.token}")
      end

      defp as_admin(conn) do
        header_content = "Basic " <> Base.encode64("birdie:tweettweet")
        conn |> put_req_header("authorization", header_content)
      end
    end
  end

  setup(_tags) do
    :ok = Ecto.Adapters.SQL.Sandbox.checkout(Birdie.Repo)

    {:ok, conn: Phoenix.ConnTest.conn()}
  end
end
