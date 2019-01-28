let Select = function (node) {
    let self = this;
    self.node = node;
    self.dropDownList = [];
    self.selectHead = "";

    let allItemsDownList = self.node.querySelectorAll(".select__item");

    self.init = function () {
        self.dropDownList = self.node.querySelector(".select__list");
        self.selectHead = self.node.querySelector(".select__head");

        self.addListeners();
    };

    self.addListeners = function () {

        allItemsDownList.forEach(function (item) {
            item.addEventListener("click", function (event) {
                self.changeText(event.target);
            });
        });

        self.dropDownList.addEventListener("click", function (event) {
            self.changeText(event.target);
        });

        self.node.addEventListener('click', function (event) {
            self.open(event.target);
        });
    };

    /**
     *  Open drop drop-down list
     */

    self.open = function (node) {
        event.target.classList.add("arrow-up");
        if (node.nextElementSibling !== null) {
            node.nextElementSibling.classList.add("open");
        }
    };

    /**
     *  Close drop drop-down list
     */

    self.close = function () {
        self.dropDownList.classList.remove("open");
        self.selectHead.classList.remove("arrow-up");
    };

    /**
     *  Change text and close drop-down list
     */

    self.changeText = function (node) {
        self.selectHead.innerHTML = node.innerHTML;
        self.close();
    };
};

let selectArr = document.querySelectorAll("[data-type='select']");
for (i = 0; i < selectArr.length; i++) {
    let select = new Select(selectArr[i]);
    select.init();
}