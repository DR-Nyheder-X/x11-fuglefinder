defmodule Birdie.Api.V1.UserView do
  use Birdie.Web, :view
  alias Birdie.Api.V1.BirdView

  def render "show.json", %{user: user} do
    render_one user, __MODULE__, "user.json"
  end

  def render "user.json", %{user: user} do
    %{
      user: %{
        id: user.id,
        token: user.token,
        birds: render_many(user.birds, BirdView, "bird.json")
      }
    }
  end
end
