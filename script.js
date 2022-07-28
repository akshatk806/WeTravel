let searchBtn=document.querySelector('#search-btn');
let searchBar=document.querySelector('.search-bar-container');

searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


// Login modal
let formBtn=document.querySelector('#login-btn');
let loginForm=document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})


