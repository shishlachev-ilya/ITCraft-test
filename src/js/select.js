let Select = function () {

  return {
    getSelectHead: function () {
      let allSelectHead = document.querySelectorAll(".select__head");

      allSelectHead.forEach(function (item) {
        item.addEventListener("click", function (event) {
          // this.openDropList(item);
          console.log(event.target);
        });
      });
    },

    getDropMenuItem: function () {
      let allDropMenuItem = document.querySelectorAll(".select__item");

      allDropMenuItem.forEach(function (item) {
        item.addEventListener("click", function () {
          this.changeHead(item);
        });
      });
    },

    openDropList: function (item) {
      item.nextElementSibling.classList.add("open");
    },

    closeDropList: function () {

    },

    changeHead: function (item) {
      console.log(item.innerHeight);
    },

    init: function () {
      this.getSelectHead();
      // this.getDropMenuItem();
    }
  }
};

let allSelect = document.querySelectorAll("[data-type=\"select\"]");

allSelect.forEach(function (item) {
  let select = new Select(item);
  select.init();
});