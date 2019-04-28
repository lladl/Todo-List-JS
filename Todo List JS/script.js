var ul = document.getElementById('list');
var li;
var par = document.getElementById('ptag');



var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem)






function addItem() {
  var input = document.getElementById('input');
  var item = input.value;
  ul = document.getElementById('list');
  var textNode = document.createTextNode(item)

  if (item === '') {
    return par.textContent = ("Please Add your todo")
  } else {
    // create li 
    var li = document.createElement('li');
    li.setAttribute('class', 'mycheck');
    // create checkbox
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');
    // create label
    var label = document.createElement('label');
    label.setAttribute('for', 'item');
    // add element to webpage
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = 'visual';
    }, 3);

    input.value = '';

  }
  par.textContent = '';
}

function removeItem() {
  li = ul.children
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index])
    }

  }
}

function removeAllItem() {
  li = ul.children
  ul.remove(li)
}

