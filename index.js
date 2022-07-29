function hints(){
    Swal.fire({
        icon: 'info',
        title: 'Подсказки',
        text: 'Нажми один раз на добавленный продукт - он зачеркнётся. Двойное нажатие - удалит его',
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }   
    })
}
setTimeout(hints, 1000);


const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toBuyList = document.querySelector('.toBuyList');

btn.addEventListener('click', itemsAddition);
inputField.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        itemsAddition();
    }
})

function itemsAddition(){
    const item = document.createElement('li');
    item.innerText = inputField.value;
    if (inputField.value.length === 0) {
        return false;
    }
    item.classList.add('itemsToBuyAdded');
    toBuyList.appendChild(item);
    inputField.value='';

    item.addEventListener('click', () => {
        item.classList.add('itemsToBuyDeleted');
    })

    item.addEventListener('dblclick', () => {
        toBuyList.removeChild(item);
    })
}