const delIcon = `<i class="fa-solid fa-trash-can " onclick="del(this)"></i>`;
const checkIcon = (cls = '') => `<i class="fa-solid fa-check ${cls}" onclick="mySwitch(this)"></i>`;

const renderList = (arr) => {
    document.querySelector('.todos').innerHTML = '';
    arr.forEach(obj => {
        let className1 = obj.status ? 'done' : '';
        let className2 = obj.status ? 'green' : '';
        document.querySelector('.todos').innerHTML += `<div class="todoitem" id="${obj.id}"> 
                                                        ${checkIcon(className2)}
                                                        <span class=${className1}>${obj.desc}</span>
                                                        ${delIcon}</div>`
    });
}

let mytodos = localStorage.getItem('mytodos') ? JSON.parse(localStorage['mytodos']) : [] ;
renderList(mytodos);

const add = () => {
    let desc = document.getElementById('desc').value;
    if (desc.length == 0) {return};
    mytodos = [...mytodos, {id: new Date().getTime(), desc: desc, status: false}]
    localStorage['mytodos'] = JSON.stringify(mytodos);
    renderList(mytodos);
}

const del = (domObj) => {
    let delId = domObj.parentNode.id;
    console.log(delId);
    mytodos = mytodos.filter(obj => obj.id != delId);
    renderList(mytodos);
    localStorage['mytodos'] = JSON.stringify(mytodos);
}

const mySwitch = (domObj) => {
    let checkId = domObj.parentNode.id;
    mytodos.forEach(obj => {
        if (obj.id == checkId) {obj.status = !obj.status}
    })
    renderList(mytodos);
    localStorage['mytodos'] = JSON.stringify(mytodos);
}