defmodule Birdie.Api.V1.UserView do
  use Birdie.Web, :view

  def render "show.json", %{user: user} do
    render_one user, __MODULE__, "user.json"
  end

  def render "user.json", %{user: user} do
    %{
      user: %{
        token: user.token
      }
    }
  end
end
