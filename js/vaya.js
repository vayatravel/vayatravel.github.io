{
	const DOM = {};
	DOM.intro = document.querySelector('.content--intro');
	DOM.shape = DOM.intro.querySelector('svg.shape');
	DOM.enter = document.querySelector('.enter.smoothscroll');

	//variables for explore
	DOM.fixed = document.querySelector('.fixed');
	DOM.explore = document.querySelector('.explore');
	charming(DOM.enter);
	DOM.enterLetters = Array.from(DOM.enter.querySelectorAll('span'));

	const init = () => {
		imagesLoaded(document.body, {background: true} , () => document.body.classList.remove('loading'));
		//DOM.enter.addEventListener('click', navigate);
		//DOM.enter.addEventListener('touchenter', navigate);
		DOM.enter.addEventListener('mouseenter', enterHoverInFn);
		DOM.enter.addEventListener('mouseleave', enterHoverOutFn);
	};

	let loaded;
	const navigate = () => {
		if ( loaded ) return;
		loaded = true;

		scrollTo("#page2");
	};

	let isActive;
	let enterTimeout;

	const enterHoverInFn = () => enterTimeout = setTimeout(() => {
		isActive = true;
		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i) => i*7,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#ffffff',
				duration: 1,
				delay: (t,i,l) => i*7+150
			}
		});
	}, 50);

	const enterHoverOutFn = () => {
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(DOM.enterLetters);
		anime({
			targets: DOM.enterLetters,
			delay: (t,i,l) => (l-i-1)*7,
			translateY: [
				{value: 10, duration: 150, easing: 'easeInQuad'},
				{value: [-10,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#d3d',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*7+150
			}
		});
	};

	init();
};


