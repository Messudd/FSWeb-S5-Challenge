import axios from 'axios';

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

let makaleNesne = {};

let makaleBoot, makaleJS, makaleJQ, makaleNode, makaleTek;
let makaleAll = [];

const Card = (makale) => {
  const { anabaslik, yazarFoto, yazarAdi } = makale;

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card');
  const headLineDiv = document.createElement('div');
  headLineDiv.classList.add('headline');
  headLineDiv.textContent = anabaslik;
  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const imgBox = document.createElement('img');
  imgBox.src = yazarFoto;
  const yazarSpan = document.createElement('span');
  yazarSpan.textContent = yazarAdi;

  imgContainer.appendChild(imgBox);
  authorDiv.append(imgContainer, yazarSpan);
  cardContainer.append(headLineDiv, authorDiv);

  return cardContainer;
};

async function makaleObject() {
  await axios
    .get('http://localhost:5001/api/makaleler')
    .then(function (responce) {
      makaleNesne = responce.data;
    })
    .catch((error) => console.log(error))
    .finally(function () {
      console.log('makaleler : ', makaleNesne);
      makaleBoot = [...makaleNesne['makaleler']['bootstrap']];
      makaleAll.push(makaleBoot);
      makaleJS = [...makaleNesne['makaleler']['javascript']];
      makaleAll.push(makaleJS);
      makaleJQ = [...makaleNesne['makaleler']['jquery']];
      makaleAll.push(makaleJQ);
      makaleNode = [...makaleNesne['makaleler']['node.js']];
      makaleAll.push(makaleNode);
      makaleTek = [...makaleNesne['makaleler']['teknoloji']];
      makaleAll.push(makaleTek);

      console.log('tum makaleler : ', makaleAll);
    });
}

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

async function cardEkleyici(secici) {
  await makaleObject();
  const cardParent = document.querySelector(secici);
  makaleAll.forEach((makaleListe) => {
    for (let i in makaleListe) {
      console.log('tek tek objeler : ', makaleListe[i]);
      cardParent.appendChild(Card(makaleListe[i]));
    }
  });
  return cardParent;
}

export { Card, cardEkleyici };
