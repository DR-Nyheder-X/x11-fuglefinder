defmodule Birdie.Router do
  use Birdie.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api/v1", Birdie, as: "api_v1" do
    pipe_through :api

    post "/current_user", Api.V1.CurrentUserController, :create
    get "/current_user", Api.V1.CurrentUserController, :show
    resources "/birds", Api.V1.BirdController, only: [:index, :show]
    post "/sightings", Api.V1.SightingController, :create
    delete "/sightings", Api.V1.SightingController, :delete
  end

  scope "/admin", Birdie, as: "admin" do
    pipe_through :browser

    resources "/sightings", SightingController
    resources "/users", UserController
    resources "/birds", BirdController
    resources "/habitats", HabitatController
  end

  scope "/", Birdie do
    pipe_through :browser

    get "/og/users/:id", OpenGraphController, :user
    get "/og/birds/:id", OpenGraphController, :bird

    get "/*path", PageController, :index
  end
end
