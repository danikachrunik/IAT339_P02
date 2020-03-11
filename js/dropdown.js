/*
	drop down code from IAT339 week7 lecture
*/
'use strict';

var menu = document.querySelector('#menu');
menu.classList.add('hidden');
menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-toggle');

var menuToggle = document.querySelector('menu-toggle');
menuToggle.setAttribute('aria-label', 'Menu Toggle');
menuToggle.setAttribute('aria-controls', 'menu');
menuToggle.setAttribute('aria-expanded', 'false');

var menuFirstItem = document.querySelector('#menu a:first-of-type');
var header = document.querySelector('header');

menuToggle.addEventListener('click',
	function() {
		if ( menu.classList.contains('hidden') ) {

			menu.classList.remove('hidden');
			menu.setAttribute('aria-hidden', 'false');
			menu.setAttribute('aria-expanded', 'true');
			menuFirstItem.focus();
		} else {

			menu.classList.add('hidden');
			menu.setAttribute('aria-hidden', 'true');
			menu.setAttribute('aria-expanded', 'false');
		}

	}
);
