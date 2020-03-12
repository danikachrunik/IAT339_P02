/*
	script to swap the header image 
*/
'use strict';

var header = document.querySelector('header');

var page = document.querySelector('title').innerHTML;

if (page == "Menu") {

  header.classList.add('menu');

} else if(page == "Pancakes") {

  header.classList.add('pancakes');

} else if(page == "French Toast") {

  header.classList.add('toast');

}
