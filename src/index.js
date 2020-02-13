
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['777', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());