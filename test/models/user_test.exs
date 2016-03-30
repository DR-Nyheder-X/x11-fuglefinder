defmodule Birdie.UserTest do
  use Birdie.ModelCase

  alias Birdie.User

  test "create" do
    {:ok, user} = User.create Birdie.Repo
    assert user.token != nil
  end
end
