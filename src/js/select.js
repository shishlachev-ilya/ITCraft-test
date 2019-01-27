let Select = function (node) {

  let self = this;
  self.node = node;
  self.list = [];
  self.text = "";

  let listItems = self.node.querySelectorAll(".select__item");

  self.init = function () {
    self.list = self.node.querySelector(".select__list");
    self.text = self.node.querySelector(".select__head");

    self.addListeners();
  };

  self.addListeners = function () {

    listItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        self.changeText(event.target);
      });
    });

    self.list.addEventListener("click", function (event) {
      self.changeText(event.target);
    });

    self.node.addEventListener('click', function (event) {
      self.open(event.target);
    });
  };

  self.open = function (node) {
    event.target.classList.add("arrow-up");
    if (node.nextElementSibling !== null) {
      node.nextElementSibling.classList.add("open");
    }
  };

  self.close = function () {
    self.list.classList.remove("open");
    self.text.classList.remove("arrow-up");
  };

  self.changeText = function (node) {
    self.text.innerHTML = node.innerHTML;
    self.close();
  };
};

let selectArr = document.querySelectorAll("[data-type='select']");
for (i = 0; i < selectArr.length; i++) {
  let select = new Select(selectArr[i]);
  select.init();
}

