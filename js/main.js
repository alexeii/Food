const modal = document.querySelector('.modal');

const toggleModal = ()=> {
    modal.classList.toggle('is-open')
};

document.addEventListener('click', (event)=> {
    let target = event.target;
    if(target.closest('#card-button')){
        toggleModal();
    }else if(target.matches('.close')){
        toggleModal();
    }  
});
