const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click',()=>{
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus',()=>{
  searchEl.classList.add('focus');
  searchInputEl.placeholder = '통합검색';
})

searchInputEl.addEventListener('blur',()=>{
  searchEl.classList.remove('focus');
  searchInputEl.placeholder = '';
})