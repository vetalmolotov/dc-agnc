var el = document.querySelector('#nav');

window.addEventListener('scroll', function() {
	var foo = document.scrollingElement.scrollTop;
	if (foo > 133) {
		el.classList.add("show");
	} else {
		el.classList.remove("show");
	}

});
