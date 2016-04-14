defmodule Birdie.OpenGraphController do
  use Birdie.Web, :controller
  alias Birdie.{Repo, User, Bird}
  import Birdie.BirdView, only: [bird_image_url: 2]

  @title "DR: Det Store Fugletræk"

  plug :put_layout, false

  def user conn, %{"id" => id} do
    user = Repo.get!(User, id) |> Repo.preload(:birds)

    render conn, "redirect.html", [
      title: @title,
      url: current_url(conn),
      image: "https://s3.brnbw.com/deal-with-it-bird.jpg",
      text: "Ikke for at prale, men jeg har allerede spottet #{length(user.birds)} danske fugle! Hvor mange kan du finde?"
    ]
  end

  def bird conn, %{"id" => id} do
    bird = Repo.get!(Bird, id)

    render conn, "redirect.html", [
      title: @title,
      url: current_url(conn),
      image: bird_image_url(bird, :single),
      text: "Jeg har spottet en #{bird.name}! Kan du finde en og de mange andre danske fugle?"
    ]
  end

  defp current_url conn do
    %Plug.Conn{scheme: scheme, host: host, request_path: path} = conn
    "#{scheme}://#{host}#{path}"
  end
end
