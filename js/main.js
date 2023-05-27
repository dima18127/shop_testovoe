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
  // считаем высоту окна браузера
  const coords = document.documentElement.clientHeight;

  
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


let ShopList = [
  { model: 'Fred Perry Олимпийка' ,
    type:  'Олимпийка',
    date: '2022.06.15',
    image: 'images/clothes/1.webp',
  },
  { model: 'Fred Perry Олимпийка' ,
  type:  'Олимпийка',
  date: '2022.01.23',
  image: 'images/clothes/2.webp',
},
  { model: 'Fred Perry Олимпийка' ,
  type:  'Олимпийка',
  date: '2023.08.02',
  image: 'images/clothes/3.webp',
  }
]
let ShopList = [
  { model: 'Fred Perry Олимпийка' ,
    type:  'Олимпийка',
    date: '2022.06.15',
    image: 'images/clothes/1.webp',
  },
  { model: 'Fred Perry Олимпийка' ,
  type:  'Олимпийка',
  date: '2022.01.23',
  image: 'images/clothes/2.webp',
},
  { model: 'Fred Perry Олимпийка' ,
  type:  'Олимпийка',
  date: '2023.08.02',
  image: 'images/clothes/3.webp',
  }
]



function ShowCatalog (){
const catalog = document.querySelector('.catalog-wrap');
    for (let ShopItem of ShopList ){
      // cтруктура карточки
      
      const card = document.createElement('div'),
      img = document.createElement('img'),
      cardName = document.createElement('div'),
      cardDate = document.createElement('div');
      cardBtn = document.createElement('button')
      catalog.append(card);
      card.append(img);
      card.append(cardName);
      card.append(cardDate);
      card.append(cardBtn);
      // стили элементов
      cardName.classList.add('card-name');
      card.classList.add('card-wrapper');
      cardName.classList.add('card-name');
      cardDate.classList.add('card-date');
      cardBtn.classList.add('btn');
      //наполнение контентом
      cardName.innerText = ShopItem['model']
      cardBtn.innerText = 'Купить'
      cardDate.innerText = getDayInfo(ShopItem['date']);
      img.setAttribute('src', ShopItem['image'])
      img.setAttribute('alt', 'img')
    }
  }
  ShowCatalog();

function getDayInfo(data) {
  let result;
  let dayOfWeek = ['воскресенье','понедельник' , 'вторник', 'среда', 'четверг', 'пятница', 'суббота', ]
  let monthNames = [
      "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
      "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ]
  let date = new Date(data);
  let day = Math.ceil(date.getDate()/7);
  return result = dayOfWeek[date.getDay()] +" " + day +" неделя " + monthNames[date.getMonth()] + " " + date.getFullYear() + " года";
}

  