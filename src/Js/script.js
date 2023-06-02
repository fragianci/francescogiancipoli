// import { DateTime } from 'luxon';
// FUNCTIONS
(() => {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init('user_NIHnHXYmsCWOlgEzdqfmD');
})();
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // Service ID for gmail and Template ID
    emailjs.sendForm('service_32y0agp', 'template_6mem2gj', this).then(
      function () {
        console.log('SUCCESS!');
        alert('Message sent!');
      },
      function (error) {
        console.log('FAILED...', error);
        alert('Error..');
      }
    );
  });
};

$(() => {
  var media = window.matchMedia('(max-width: 960px)');
  let makeMedia = (media) => {
    if (media.matches) {
      $('.navbar-toggler').click(() => {
        $('#collapsibleNavbar').slideToggle();
      });
      $('.nav-link').click(() => {
        $('#collapsibleNavbar').slideToggle();
        $('#collapsibleNavbar').css('display', 'none');
      });
    }
  };
  makeMedia(media);
  media.addListener(makeMedia);
});

const caseStudiesAnchor = document.querySelector('#case-studies');
const navLinkAnchor1 = document.querySelector('#anchor-1');
const navLinkAnchor2 = document.querySelector('#anchor-2');
const navLinkAnchor3 = document.querySelector('#anchor-3');
const navLinkAnchor4 = document.querySelector('#anchor-4');
const mainContentDiv = document.querySelector('#main-content');
const caseStudyDiv = document.querySelector('#case-study');

caseStudiesAnchor.addEventListener('click', () => {
  caseStudiesAnchor.className = 'nav-link clicked';
  caseStudyDiv.className = 'show';
  mainContentDiv.className = 'hide';
});

navLinkAnchor1.addEventListener('click', () => {
  showMainContent();
});
navLinkAnchor2.addEventListener('click', () => {
  showMainContent();
});
navLinkAnchor3.addEventListener('click', () => {
  showMainContent();
});
navLinkAnchor4.addEventListener('click', () => {
  showMainContent();
});

function showMainContent() {
  caseStudiesAnchor.className = 'nav-link notClicked';
  caseStudyDiv.className = 'hide';
  mainContentDiv.className = 'show';
}

// document.addEventListener('DOMContentLoaded', function (event) {
//   const age = document.querySelector('#age');
//   console.log(age.innerHTML);
//   console.log(DateTime.now());
// });
