defmodule Birdie.SeedGen do
  @lat 55662370..55659646
  @lng 12584882..12593293

  def coord do
    {Enum.random(@lat) / 1000000, Enum.random(@lng) / 1000000}
  end
end
