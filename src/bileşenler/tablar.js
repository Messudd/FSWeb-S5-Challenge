import axios from 'axios';

// GÖREV 3
// ---------------------
// Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
// Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
// fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">teknoloji</div>
// </div>
//

let datas = {};
let konuList;

const Tablar = (param) => {
  const topics = document.createElement('div');
  topics.classList.add('topics');
  // console.log('konular_listesi :', param);
  for (let i in param) {
    const topicDiv = document.createElement('div');
    topicDiv.classList.add('tab');
    topicDiv.textContent = param[i];
    topics.appendChild(topicDiv);
  }

  return topics;
};

async function topicList() {
  await axios
    .get('http://localhost:5001/api/konular')

    .then(function (responce) {
      datas = responce.data;
      console.log('data _ FirstState :  ', datas);
    })
    .catch((error) => console.log(error))
    .finally(function () {
      console.log('final - data : ', datas);
      konuList = datas.konular.map((element) => element);
    });
}

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//

async function tabEkleyici(secici) {
  const tabParent = document.querySelector(secici);
  await topicList();
  console.log('liste : ', konuList);
  tabParent.appendChild(Tablar(konuList));
  return tabParent;
}

export { Tablar, tabEkleyici };
