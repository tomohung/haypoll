defmodule Haypoll.Entry do
  use Haypoll.Web, :model

  schema "entries" do
    field :title, :string
    field :votes, :integer
    belongs_to :poll, Haypoll.Poll

    timestamps
  end

  @required_fields ~w(title votes)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
