/*!
 * mishmash v0.0.1
 * Bootstrap Mishmash
 * (c) 2019 BinaryRx
 * MIT License
 * https://github.com/binaryrx/Bootstrap_4_MishMash
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);
/**
 * Element.matches() polyfill (simple version)
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
 */
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}