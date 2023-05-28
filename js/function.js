export function ShowCatalog (categoriaSelector, ShopList){
    const catalog = document.querySelector(categoriaSelector);
        for (let ShopItem of ShopList ){
          // cтруктура карточки
          const card = document.createElement('div'),
          img = document.createElement('img'),
          cardName = document.createElement('div'),
          cardDate = document.createElement('div'),
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
          cardBtn.classList.add('buy');
          //наполнение контентом
          cardName.innerText = ShopItem['model']
          cardBtn.innerText = 'Купить'
          cardDate.innerText = getDayInfo(ShopItem['date']);
          img.setAttribute('src', ShopItem['image'])
          img.setAttribute('alt', 'img')
        }
      }
export function getDayInfo(data) {
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

