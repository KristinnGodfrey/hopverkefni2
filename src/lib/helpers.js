export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function createElement(el, text) {
  const element = document.createElement(el);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
}


// Function to activate cards and show them.
export function showCards(value) {
  const newValue = value.toLowerCase();

  for (const card of document.querySelectorAll('.card')) {
    if (card.classList.contains(newValue)) {
      card.className = `card ${newValue}`;
    }
  }
}

// Function to hide the cards.
export function hideCards(value) {
  const newValue = value.toLowerCase();

  for (const card of document.querySelectorAll('.card')) {
    if (!card.classList.contains(newValue)) {
      card.classList.add('card_hidden');
    } else if (card.classList.contains('card_hidden')) {
      card.className = `card ${newValue}`;
    }
  }
}

// Variable to count how many buttons are active.
let buttonCounter = 0;

// Function to read if buttons are active or not.
// It also runs the functions to hide and show cards
// depending on how many buttons are active.
export function readButton(button) {
  const bTarget = button.target;

  // If the button is pressed and already active change it to inactive.
  // raise the counter and if it reaches zero activate all cards.
  if (bTarget.classList.contains('button_active')) {
    bTarget.className = 'button';
    buttonCounter--;
    if (buttonCounter === 0) {
      showCards('html');
      showCards('css');
      showCards('javascript');
    }
  } else {
    bTarget.classList.add('button_active');
    buttonCounter++;
  }

  // Check the buttons that are active and, for each inner value, hide
  // specific cards.
  for (const buttons of document.querySelectorAll('.button_active')) {
    hideCards(`${buttons.innerHTML}`);
  }

  for (const buttons of document.querySelectorAll('.button_active')) {
    showCards(`${buttons.innerHTML}`);
  }
}
