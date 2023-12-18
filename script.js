const inputBox=document.querySelector('.input-box');
const listContainer=document.querySelector('.list-container');
const buttonElement=document.querySelector('input');

buttonElement.addEventListener('keydown',(event)=>{
    if(event.key==='Enter')
       addTask();
})

function addTask(){
    if(inputBox.value===''){
        alert('You must enter something');
    }else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
        saveData();
    }

    inputBox.value='';
}

listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
    }else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
    }
    saveData();
});

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function fetchData(){
    listContainer.innerHTML=localStorage.getItem('data');
}

fetchData();