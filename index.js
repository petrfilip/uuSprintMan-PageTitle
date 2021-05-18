// ==UserScript==
// @name         uuSprintMan page title
// @namespace    https://github.com/petrfilip
// @version      0.1
// @description  Improve page title of sprintman
// @author       petr.filip@tix.cz
// @match        https://uuapp.plus4u.net/uu-sprintman-maing01/*
// @icon         https://www.google.com/s2/favicons?domain=plus4u.net
// @grant        none
// ==/UserScript==


const checkElement = async selector => {
  while ( document.querySelector(selector) === null || document.querySelector(selector).innerText === "") {
    await new Promise( resolve => requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
};

checkElement('h1').then((selector) => {
    var currentTitle = document.title
    var newTitle = selector.innerText;

    newTitle = newTitle.substr(newTitle.indexOf("-") + 1);
    document.title = newTitle + " | " + currentTitle
});

