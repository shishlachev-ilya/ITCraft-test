let Select = function (node) {

    let obj = {

        node: node,

        /**
         * Returns a select box header
         * @returns {Element}
         */
        getSelectHead: function () {
            return node.querySelector(".select__head");
        },

        /**
         * Returns a drop-down list
         * @returns {Element}
         */
        getDropMenu: function () {
            return node.querySelector(".select__list");
        },

        /**
         * Shows the drop-down list when clicking on the title and rotate arrow
         * Calls a method to iterate drop-down list items
         */
        openDropMenu: function () {
            obj.getSelectHead().addEventListener("click", function () {
                obj.getDropMenu().classList.toggle("open");
                obj.getSelectHead().classList.toggle("arrow-up");
            });

            obj.getItemsDropMenu();
            obj.clickOutsideBlock();
        },

        /**
         * Hidden the drop-down list
         */
        closeDropMenu: function () {
            obj.getDropMenu().classList.remove("open");
            obj.getSelectHead().classList.remove("arrow-up");
        },

        /**
         * Iterate the drop-down list items and calls the method for changeText each
         */
        getItemsDropMenu: function () {
            let items = obj.getDropMenu().querySelectorAll(".select__item");

            [].forEach.call(items, function (item) {
                item.addEventListener("click", obj.changeText);
            });
        },

        /**
         * Takes the value of the current element and changes the title
         * @param event
         */
        changeText: function (event) {
            let currentText = event.target.innerHTML;
            obj.getSelectHead().innerHTML = currentText;
            obj.closeDropMenu();
        },

        /**
         * Closes the menu if you do not choose any items drop-list menu
         */
        clickOutsideBlock: function () {
            document.addEventListener("click", function (event) {
                let e = node;

                if (!e.contains(event.target)) {
                    obj.closeDropMenu()
                }
            });
        },

        /**
         * Entry point
         */
        init: function () {
            obj.openDropMenu();
        }

    };

    return {
        init: obj.init
    };

};

/**
 * Iterate all select box and create new object for each
 * @type {NodeList}
 */
let allSelects = document.querySelectorAll('[data-type="select"]');

[].forEach.call(allSelects, function (select) {
    let sel = new Select(select);
    sel.init();
});