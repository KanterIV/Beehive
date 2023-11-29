const elementsSet = {
  case: document.querySelector('.buttonup-case'),
  upButton: document.querySelector('.buttonup'),
};

const upButVieW = evt => {
  switch (evt.type) {
    case 'scroll':
      if (Math.floor(window.scrollY) >= window.innerHeight / 2) {
        elementsSet.case.style.visibility = 'visible';
      } else {
        elementsSet.case.style.visibility = 'hidden';
      }
      break;
    case 'mouseover':
      elementsSet.upButton.classList.add('buttonup-hover');
      break;
    case 'mouseout':
      elementsSet.upButton.classList.remove('buttonup-hover');
      break;
    case 'click':
      window.scrollTo(0, 0);
      elementsSet.upButton.classList.remove('buttonup-hover');
      break;
    default:
      elementsSet.upButton.style.visibility = 'hidden';
      break;
  }
};

document.addEventListener('scroll', upButVieW);
elementsSet.case.addEventListener('mouseover', upButVieW);
elementsSet.case.addEventListener('mouseout', upButVieW);
elementsSet.upButton.addEventListener('click', upButVieW);
