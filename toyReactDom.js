function render(vdom, element) {
  const range = document.createRange();
  if (element.children.length) {
    range.setStartAfter(element.lastChild);
    range.setEndAfter(element.lastChild);
  } else {
    range.setStart(element, 0);
    range.setEnd(element, 0);
  }
  vdom.mountTo(range);
}

const ToyReactDOM = {
  render,
}

export default ToyReactDOM;