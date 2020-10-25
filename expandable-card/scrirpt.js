document.addEventListener('DOMContentLoaded', function() {
	let cardToggles = document.getElementsByClassName('card-toggle');
	for (let i = 0; i < cardToggles.length; i++) {
		cardToggles[i].addEventListener('click', e => {
			e.currentTarget.parentElement.parentElement.childNodes[3].classList.toggle('is-hidden');
		});
	}
	
});
document.querySelectorAll('.rotate').forEach(function(i) {
  i.addEventListener('click', function() {
    this.classList.toggle('down')
  });
});

