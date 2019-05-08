var LoginView = function (container) {

  var strHTML =
  `<form>
      <div class="form-group">
        <button type="button" class="btn btn-warning">Log in</button>
        <button type="button" class="btn btn-warning" id="readMoreBtn">Read more</button>
      </div>
    </form>`;
    var buttonPlacements = container.find("#startBtns");
    buttonPlacements.html(strHTML);
    this.startBtns = container.find("#readMoreBtn");
}
