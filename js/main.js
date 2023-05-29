import  {ShopList,ShopList2,ShopList3}  from "./BD.js";
import  {ShowCatalog}  from "./function.js";

// 1._____ scrolling up

// считываем кнопку
const goTopBtn = document.querySelector(".up-arrow")

window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;

  // если вышли за пределы первого окна
  if (scrolled > coords) {
    // кнопка появляется
    goTopBtn.classList.add("show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("show");
  }}
function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-30)
    setTimeout(goTop, 5)}
}

// Рендер каталогов
ShowCatalog('.catalog-wrap', ShopList);
ShowCatalog('.catalogShoes', ShopList2);
ShowCatalog('.catalogAccessory', ShopList3);

//Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.menu').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset - 60;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
// Переключение темы
let changeTheme = document.querySelector('#ChangeTheme'),
root = document.querySelector(':root');

changeTheme.addEventListener('click', () => {
  if (root.style.getPropertyValue("--main-color") === '#043c4d') {
    root.style.setProperty('--main-color', '#301934')
  }
  else {
    root.style.setProperty('--main-color', '#043c4d')
  }
})
// POPUP
let popup = document.querySelector('.popup__wrapper'),
    overlay = document.querySelector('.popup__overlay'),
    buyBtns = document.querySelectorAll('.buy'),
    close = document.querySelector('.close'),
    btnAlert = document.querySelector('.btnAlert');
    btnAlert.addEventListener('click',()=> {
      alert('Товар добавлен в корзину.')
    })
    buyBtns.forEach(item => item.addEventListener('click', ()=> {
       popup.classList.add('active');
       overlay.classList.toggle('active');
      }) 
      )
      close.addEventListener('click',()=>{
        popup.classList.remove('active');
        overlay.classList.remove('active');
      })
    

      // валидация инпута в форме
      let inpNum = document.querySelector('.inptext');
      inpNum.addEventListener('input', ()=>{
        inpNum.value = inpNum.value.replace(/\D/, '')
      })