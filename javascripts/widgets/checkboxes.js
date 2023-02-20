function checkboxes(widget) {
  const controlling = widget.querySelector("[kjs-role=controlling_checkbox]");
  const related = widget.querySelectorAll("[kjs-role=related_checkbox]");

  function setup() {
    console.log(">>> checkbox setup");
  }

  function onControlCheck(e) {
    related.forEach((r) => {
      r.checked = e.currentTarget.checked;
    });
  }

  function onRelatedClick(e) {
    let checkedCount = 0;
    related.forEach((r) => (checkedCount += r.checked ? 1 : 0)); // filter() would nto work on this collection
    controlling.indeterminate = false;
    console.log(">>> Relatd click ...", checkedCount, related.length);

    if (checkedCount == 0) {
      controlling.checked = false;
    } else if (checkedCount == related.length) {
      controlling.checked = true;
    } else {
      controlling.indeterminate = checkedCount > 0;
    }
  }

  var actions = [];
  actions.push({
    element: controlling,
    event: "click",
    handler: onControlCheck,
  });

  related.forEach(function (checkbox) {
    actions.push({
      element: checkbox,
      event: "click",
      handler: onRelatedClick,
    });
  });
  return {
    setup: setup,
    actions: actions,
  };
}
module.exports = checkboxes;
