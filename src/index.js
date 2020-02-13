
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['777', 'webpack'], ' ');

  this.alert('Hmmm, this probably isn\'t a great idea...')
  return element;
}

document.body.appendChild(component());