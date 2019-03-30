const request = document.getElementById('btn-submit');
request.addEventListener('click', showTheResult);

function showTheResult(){
    const nameInput = document.getElementById('text');
    if(nameInput == ""){
        
        alert('Thanks!');// + nameInput + ' for your kind feedback!');
    }else{
        alert('Leave comment next time!');
    }
}