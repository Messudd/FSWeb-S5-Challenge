// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const Header = (baslik, tarih, yazi) => {
  const headDiv = document.createElement('div');
  headDiv.classList.add('header');
  const headSpanFirst = document.createElement('span');
  headSpanFirst.classList.add('date');
  headSpanFirst.textContent = tarih;
  const bigHead = document.createElement('h1');
  bigHead.textContent = baslik;
  const headSpanSeccond = document.createElement('span');
  headSpanSeccond.classList.add('temp');
  headSpanSeccond.textContent = yazi;

  headDiv.append(headSpanFirst, bigHead, headSpanSeccond);

  return headDiv;
};

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

const headerEkleyici = (secici) => {
  const head = 'Learn React';
  const date_head = '04/07/2023';
  const yaziStr =
    'Yazılım geliştiriciler arasında bu kadar popüler olan React JS tam olarak nedir?';
  const headContainer = document.querySelector(secici);
  headContainer.appendChild(Header(head, date_head, yaziStr));
  return headContainer;
};

export { Header, headerEkleyici };
