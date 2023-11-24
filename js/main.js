'use strict'

const pictures = document.querySelectorAll('.story__picture-flex div');
const pictureOne = document.querySelector('.story__picture-one');
const pictureTwo = document.querySelector('.story__picture-two');
const pictureThree = document.querySelector('.story__picture-three');


const closeMenuBtn = document.querySelector('.close__nav');
const menuBurger = document.querySelector('.header__burger');
const body = document.querySelector('.body');
const menuLinks = document.querySelectorAll('.header__nav-item a');


// Mobile Menu

menuBurger.onclick = function () {
  menuBurger.classList.toggle("open");
  body.classList.toggle("mobile-menu-opened");
  body.classList.toggle("no-scroll");
};

for (let menuLink of menuLinks) {

  menuLink.onclick = function () {
  if (body.classList.contains('mobile-menu-opened')) {
    menuBurger.classList.remove("open");
    body.classList.remove("mobile-menu-opened");
    body.classList.remove("no-scroll");
  };

  };

};


if (window.matchMedia('(min-width: 1199px)').matches) {


window.addEventListener('scroll', function() {


  if  (window.scrollY < 900) {
      pictureOne.classList.add('show');
      pictureTwo.classList.remove('show');
  };

  if (window.scrollY > 900 && window.scrollY < 1100) {
    pictureOne.classList.remove('show');
    pictureTwo.classList.add('show');
  };

  if (window.scrollY > 1100) {
    pictureOne.classList.remove('show');
    pictureTwo.classList.remove('show');
    pictureThree.classList.add('show');
  } else {
    pictureThree.classList.remove('show');
  };

});

};

if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches) {

  window.addEventListener('scroll', function() {


  if  (window.scrollY < 750) {
      pictureOne.classList.add('show');
      pictureTwo.classList.remove('show');
  };

  if (window.scrollY > 750 && window.scrollY < 1050) {
    pictureOne.classList.remove('show');
    pictureTwo.classList.add('show');
  };

  if (window.scrollY > 1050) {
    pictureOne.classList.remove('show');
    pictureTwo.classList.remove('show');
    pictureThree.classList.add('show');
  } else {
    pictureThree.classList.remove('show');
  };


    // if (window.scrollY > 750 && window.scrollY < 1050) {
    //   pictureOne.classList.remove('show');
    //   pictureTwo.classList.add('show');
    // } else if (window.scrollY < 750)  {
    //   pictureOne.classList.add('show');
    //   pictureTwo.classList.remove('show');
    // };

    // if (window.scrollY > 1050) {
    //   pictureTwo.classList.remove('show');
    //   pictureThree.classList.add('show');
    // } else {
    //   pictureThree.classList.remove('show');
    // };

  });

};


// Валидация формы


// получаем элементы формы
const form = document.getElementById('feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const privacyCheckbox = form.querySelector('#c1');
const feedbackSuccess = form.querySelector('.feedback-form__success');
const closeSuccessBtn = form.querySelector('.close-success__btn');


// функция валидации email
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

// функция валидации формы
function validateForm() {
  // проверяем email
  if (!validateEmail(emailInput.value)) {
    emailInput.parentElement.classList.add('feedback-form__input-alert');
    return false;
  } else {
    emailInput.parentElement.classList.remove('feedback-form__input-alert');
  }

  // проверяем чекбокс
  if (!privacyCheckbox.checked) {
    privacyCheckbox.parentElement.classList.add('feedback-form__checkbox-alert');
    return false;
  } else {
    privacyCheckbox.parentElement.classList.remove('feedback-form__checkbox-alert');
  }

  // если все проверки прошли успешно, возвращаем true
  return true;
};


// Отправка формы
$(document).ready(function () {

  $("#feedback-form").submit(function () {
    if (!validateForm()) {
      return false;
    }

    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function () {
      feedbackSuccess.style.visibility = "visible";
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});


closeSuccessBtn.onclick = () => feedbackSuccess.style.visibility = "hidden";

const helpsHeader = document.querySelector('.helps-with__header');


if (window.matchMedia('(max-width: 1199px)').matches) {

  helpsHeader.textContent = 'Issues Resolved by the Service';

} else {
  helpsHeader.textContent = 'Issues Resolved by the Service';
}


// Problems Popup

const problemsContainer = document.querySelector('.helps-with__flex-container');
const closePopupBtn = document.querySelector('.close__popup');
const popupWrapper = document.querySelector('.popup__wrapper');
const problemTitle = document.querySelector('.popup .problem__title');
const problemText = document.querySelector('.popup .problem__text');

problemsContainer.onclick = function (event) {


  if (event.target.classList.contains("problem_btn")) {

    const titleElem = event.target.closest('.problem').querySelector('.problem__title').textContent;
    const textElem = event.target.closest('.problem').querySelector('.problem__text').textContent;

    problemTitle.textContent = titleElem;
    problemText.textContent = textElem;

    popupWrapper.style.display = "block";
    body.classList.add("no-scroll");
  }
};


closePopupBtn.onclick = function () {
  popupWrapper.style.display = "none";
  body.classList.remove("no-scroll");
};


const tabsContainer = document.querySelector('.functions__flex-container');


// Accordion

const functionItems = document.querySelectorAll('.function-item');

for (let functionItem of functionItems) {

  functionItem.onclick = function () {

    functionItem.classList.toggle('clicked');
    functionItem.classList.toggle('function-item_opened');

  };
};


// Functions Popup

tabsContainer.onclick = function (event) {

  if (window.matchMedia('(min-width: 767px) and (max-width: 991px)').matches) {

  if (event.target.classList.contains("imgSpoiler")) {

    const functionItem = event.target.closest('.function-item');

    const titleElem = event.target.querySelector('.function-item__title').textContent;
    const paragraphs = functionItem.querySelectorAll('.function-item__paragraph');
    const destination = document.querySelector('.popup');

    problemTitle.textContent = titleElem;
    // problemText.textContent = textElem;

    paragraphs.forEach(paragraph => {
      const newParagraph = document.createElement('p');
      newParagraph.textContent = paragraph.textContent;
      newParagraph.classList.add('problem__text');
      destination.appendChild(newParagraph);
    });

    popupWrapper.style.display = "block";

  };

};

};


closePopupBtn.onclick = function () {

  const paragraphs = document.querySelectorAll('.popup .problem__text');

  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = '';

    if (i > 0) {
      paragraphs[i].remove();
    };
  }

  popupWrapper.style.display = "none";
  body.classList.remove("no-scroll");
};