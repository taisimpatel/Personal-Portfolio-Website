// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      //active section for animation scoll
      sec.classList.add('show-animate');
    }
    //if want to use animation that repeats on scroll use this
    else {
      sec.classList.add('show-animate');
    }

  });


  //Working Of higher me button
  document.querySelector('.btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default behavior (navigation)
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  /*Animation footer on scroll*/

  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.
    scrollHeight);
}



// Get all the accordion buttons
const accordions = document.querySelectorAll('.accordion-button');

// Add event listeners to each accordion button
accordions.forEach(button => {
  button.addEventListener('click', function () {
    // Toggle the panel visibility
    const panel = this.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';

    // Optionally, close other panels
    accordions.forEach(otherButton => {
      if (otherButton !== this) {
        otherButton.nextElementSibling.style.display = 'none';
      }
    });
  });
});


function toggleDescription(button) {
  // Get the parent project box
  const projectBox = button.parentElement;

  // Find the extra information span
  const extraInfo = projectBox.querySelector('.extra-info');

  // Toggle the visibility of the extra info
  if (extraInfo.style.display === 'none' || extraInfo.style.display === '') {
    extraInfo.style.display = 'block';
    button.textContent = 'Read Less'; // Change the button text
  } else {
    extraInfo.style.display = 'none';
    button.textContent = 'Read More'; // Change the button text back
  }
}