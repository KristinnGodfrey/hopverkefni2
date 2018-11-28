import List from './lib/list';
import Lecture from './lib/lecture';
import { readButton } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {

  } else {
    const list = new List();
    list.load();
    const buttons = document.querySelectorAll('.button');
    for (const button of document.querySelectorAll('.button')) {
      button.addEventListener('click', readButton);
    }
    console.log(buttons.length);
  }
});
