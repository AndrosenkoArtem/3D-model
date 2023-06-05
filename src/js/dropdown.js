const btnDropdown = document.querySelectorAll('#btnDropdown');

Array.from(btnDropdown).forEach(dropdown => {
  dropdown.addEventListener('click', event => {
    event.target.nextElementSibling.classList.toggle('show');
  });
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown__button')) {
    var dropdowns = document.getElementsByClassName('dropdown__content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
//
