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