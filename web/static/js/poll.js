export class Poll {
  constructor() {
    this._setupAddEntry();
    this._setupRemoveEntry()
  }
  _setupAddEntry() {
    $("#add-entry").on("click", "a.remove_entry", this._removeEntry)
  }

  _removeEntry(event) {
    $(event.currentTarget).parents(".entry").remove()
  }

  _cloneEntry() {
    var newEntry = $("#entries .entry:first").clone();
    newEntry.find("input[type=text]").val("");
    newEntry.appendTo("#entries");
    newEntry.find("input[type=text]").focus();
  }
}
