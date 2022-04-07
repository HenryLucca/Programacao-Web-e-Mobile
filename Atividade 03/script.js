const areas = document.getElementsByClassName('area');

for(let area in areas){
    areas[area].onclick = () => clickCont(areas[area]);
}
function clickCont(area){
    const cont = area.children[1];
    console.log('clickcont acionado');
    cont.innerHTML = parseInt(cont.innerHTML) + 1;
}

function reset(event){
    if(event.target.getId == "reset2"){
        document.getElementById('clicks2').innerHTML = -1;
    } else {
        document.getElementById('clicks1').innerHTML = -1;
    }
}
