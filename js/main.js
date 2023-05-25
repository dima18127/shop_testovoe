// 1._____ scrolling up

// считываем кнопку
const goTopBtn = document.querySelector(".up-arrow")
console.log(goTopBtn);

window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  // вычисляем положение от верхушки страницы
  const scrolled = window.pageYOffset;
  console.log(window.pageYOffset);
  
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;
  console.log(coords);
  
  // если вышли за пределы первого окна
  if (scrolled > coords/2) {
    // кнопка появляется
    goTopBtn.classList.add("show");
  } else {
    // иначе исчезает
    goTopBtn.classList.remove("show");
  }}
function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0,-40)
    setTimeout(goTop, 0)}
}

// Дата 

// let clothers = document.querySelectorAll('.card-date')
// clothers.forEach((item) => {
//     item.innerText = date;
    
// });
//  ___________old del
// function getDayInfo(data){
//   let options = {
//     year: 'numeric',
//     month: 'long',
//     weekday: 'long',
//     day: 'numeric',
  
//   };
// let data2 = new Date(data).toLocaleString("ru", options)
// console.log(data2.getDay());
//  console.log(data2);
// };
// getDayInfo('01.01.2022')

function getDayInfo(data) {
  let result;
  let dayOfWeek = ['воскресенье','понедельник' , 'вторник', 'среда', 'четверг', 'пятница', 'суббота', ]
  let monthNames = [
      "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
      "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ]
  // let date2 = new Date()
  let date = new Date(data);
  result = dayOfWeek[date.getDay()] +" " + monthNames[date.getMonth()] + " " + date.getFullYear() + " года"
  let day = Math.ceil(date.getDate()/7);
  console.log(day);
  
  console.log(result);
  date.getMonth()
  // console.log(date2.getDay());
}
  