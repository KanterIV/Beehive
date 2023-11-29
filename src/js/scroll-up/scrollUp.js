const elementsSet = {
  case: document.querySelector('.buttonup-case'),
  upButton: document.querySelector('.buttonup'),
};

const upButVieW = evt => {
  switch (evt.type) {
    case 'scroll':
      if (Math.floor(window.scrollY) >= window.innerHeight / 2) {
        elementsSet.case.style.visibility = 'visible';
        elementsSet.upButton.classList.add('anima-up');
      } else {
        elementsSet.case.style.visibility = 'hidden';
        elementsSet.upButton.classList.remove('anima-up');
      }
      break;
    case 'click':
      window.scrollTo(0, 0);
      break;
    default:
      elementsSet.upButton.style.visibility = 'hidden';
      break;
  }
};

document.addEventListener('scroll', upButVieW);
elementsSet.upButton.addEventListener('click', upButVieW);
