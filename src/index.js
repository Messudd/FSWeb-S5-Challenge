// Bu dosyada değişiklik yapmayın
// Bu dosyada değişiklik yapmayın
// Bu dosyada değişiklik yapmayın
// Bu dosyada değişiklik yapmayın
import { cardEkleyici } from './bileşenler/card';
import { tabEkleyici } from './bileşenler/tablar';
import { headerEkleyici } from './bileşenler/header';

async function eventFunc() {
  await tabEkleyici('.tabs-container');
  const tabNodeList = document.querySelectorAll('.topics .tab');

  tabNodeList.forEach((content) => {
    content.style.marginLeft = '30px';
    content.addEventListener('mouseover', (event) => {
      event.target.style.transform = 'scale(1.2)';
    });
    content.addEventListener('mouseout', (event) => {
      event.target.style.transform = 'scale(1)';
    });
  });
}

headerEkleyici('.header-container');
eventFunc();
cardEkleyici('.cards-container');

console.log('Teknoloji Zamanı yüklendi!');
