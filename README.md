# x10

### setup

```sh
$ brew install elixir postgres
$ createuser -P -s -e postgres
# type password "postgres"
$ mix deps.get
$ mix do ecto.create, ecto.migrate
$ npm install
```

### dev

```sh
$ iex -S mix phoenix.server
```

### data

Drop the database and recreate it with test data.

```sh
$ mix ecto.reset
```
