function hints(){
    Swal.fire({
        icon: 'info',
        title: 'Подсказки',
        text: 'Нажми один раз на добавленный продукт - он меняется с актуального на неактульный и обратно. Двойное нажатие - удалит его',
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }   
    })
}


const infoBtn = document.querySelector('.infoBtn');
infoBtn.addEventListener('click', hints);

function animatedBtn(){
    infoBtn.classList.add('animate__animated', 'animate__tada', 'animate__repeat-2');
}

function inactiveAnimation(){
    infoBtn.classList.remove('animate__animated', 'animate__tada', 'animate__repeat-2');

}



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
    setTimeout(animatedBtn, 1000);
    setTimeout(inactiveAnimation, 3000);

    item.addEventListener('click', () => {
        item.classList.toggle('itemsToBuyDeleted');
    })

    item.addEventListener('dblclick', () => {
        toBuyList.removeChild(item);
    })
}