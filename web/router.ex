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

  scope "/api/v1", as: "api_v1", alias: Birdie do
    pipe_through :api

    post "/current_user", Api.V1.CurrentUserController, :create
    get "/current_user", Api.V1.CurrentUserController, :show
  end

  scope "/", Birdie do
    pipe_through :browser # Use the default browser stack

    resources "/sightings", SightingController
    resources "/users", UserController

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", Birdie do
  #   pipe_through :api
  # end
end
