const defListItemsArr = [...document.querySelectorAll('.definiteness-item')];
const amount = document.querySelector('.amount');

defListItemsArr.map(item => item.addEventListener('click', onGigabyteСlick));

let gigabyteId = 3;

gygabyteColorChange(gigabyteId);

function onGigabyteСlick(event) {
  gigabyteId = Number(event.currentTarget.id);
  gygabyteColorChange(gigabyteId);
  amountChange(gigabyteId);
}

function gygabyteColorChange(lastElementNum) {
  colorChecker(defListItemsArr);
  for (let i = 0; i <= lastElementNum; i += 1) {
    const itemsChildren = [...defListItemsArr[i].children];
    itemsChildren.map(item => {
      if (item.className === 'definiteness-chexbox') {
        item.classList.add('def-chexbox-bgcolor');
        return;
      }
      item.classList.add('def-chexbox-btn-color');
    });
  }
}

function colorChecker(arr) {
  arr.map(arrItem => {
    const itemChildren = [...arrItem.children];
    itemChildren.map(item => {
      item.classList.remove('def-chexbox-bgcolor');
      item.classList.remove('def-chexbox-btn-color');
    });
  });
}

function amountChange(id) {
  switch (id) {
    case 0:
      amount.textContent = '150';
      break;
    case 1:
      amount.textContent = '300';
      break;
    case 2:
      amount.textContent = '525';
      break;
    case 3:
      amount.textContent = '925';
      break;
    case 4:
      amount.textContent = '1050';
      break;
    case 5:
      amount.textContent = '1425';
      break;
    case 6:
      amount.textContent = '1850';
      break;
    case 7:
      amount.textContent = '2275';
      break;
    case 8:
      amount.textContent = '3050';
      break;
    case 9:
      amount.textContent = '4000';
      break;
    default:
      amount.textContent = '0';
      break;
  }
}
