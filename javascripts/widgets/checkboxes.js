function checkboxes(widget) {
  var controlling = widget.querySelectorAll('[kjs-role=controlling_checkbox]');
  var related = widget.querySelectorAll('[kjs-role=related_checkbox]');

  function setup() {
    console.log('>>> checkbox setup x');
  }    

  function onContolCheck(e) {
    console.log('>>> controlling click ...');
  }

  function onRelatedClick(e) {
    console.log('>>> Relatd click ...');
  }

  var actions = [];
  controlling.forEach(function (checkbox) {
    actions.push({
      element: checkbox,
      event: 'click',
      handler: onContolCheck
    });
  });
  related.forEach(function (checkbox) {
    actions.push({
      element: checkbox,
      event: 'click',
      handler: onRelatedClick
    });
  });
  return {
    setup: setup,
    actions: actions
  };
}
module.exports = checkboxes;
