let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {

  var item = document.createElement("div");
  item.classList.add("item");
  item.id = 'item-' + order
  item.draggable = true
  item.addEventListener("dragstart" , (event) => {

        event.DataTransfer.setData('text', event.target.id);
  });
  
};

document.querySelectorAll('.drop').forEach(element => {
});