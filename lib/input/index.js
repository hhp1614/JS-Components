class Input {
	constructor() {
		let doms = document.querySelectorAll('.input-field');
		doms.forEach(item => {
			let input = item.querySelector('input');
			let label = item.querySelector('label');
			input.addEventListener('focus', () => {
				label.classList.add('active');
			});
			this.hasPlaceholder(input.placeholder, input, label)
		});
	}
	hasPlaceholder(placeholder, input, label) {
		if (placeholder) {
			label.classList.add('active');
		} else {
			input.addEventListener('blur', () => {
				label.classList.remove('active')
			});
		}
	}
}
new Input();