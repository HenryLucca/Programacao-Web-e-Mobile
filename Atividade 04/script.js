const nameInput = document.getElementById('item');
nameInput.onchange = function(){
    if(nameInput.value != ""){
        document.getElementById('btn-add').disabled = false;
    }
}

function createItem() {
    const itemName = document.getElementById('item').value;
    const item = document.createElement('div');
    item.style.backgroundColor = randomColor();
    item.classList.add('item-count');
    item.innerHTML = 
    `<p class="item-name">${itemName}</p> 
    <output id="count">0</output>
    <br>
    <br>
    <button onclick="count(event)" class="btn-count">Contar</button>  
    <button onclick="reset(event)" class="btn-reset">Zerar</button>`;
    document.getElementById('item-section').appendChild(item);
}
function count(event){
    const item = event.target.parentElement;
    //const count = item.querySelector('.count');
    //item.getElementById('count');
    const count = item.children[1];
    count.innerHTML = parseInt(count.innerHTML) + 1;
}
function reset(event){
    const item = event.target.parentElement;
    const count = item.children[1];
    count.innerHTML = '0';
}
function randomColor()
{
  return '#' + parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0');
}
