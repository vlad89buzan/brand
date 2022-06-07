let trigger = document.querySelector('.pricing__toggle-btn');
		let h2 = document.querySelectorAll('h2.dynamic-value');
		let span = document.querySelectorAll('span.dynamic-value');
		let isActive = true;
		setTextContent()
		trigger.addEventListener('click', function () {
			trigger.classList.toggle('active')
			if (trigger.classList.contains('active')) {
				isActive = false;
			} else {
				isActive = true;
			};
			setTextContent()
		})
		function setTextContent() {
			if (isActive) {
				for (let i = 0; i < h2.length; i++) {
					console.log('aaaa')
					h2[i].innerHTML = h2[i].dataset.monthly;
					span[i].innerHTML = span[i].dataset.monthly;
				}
			} else {
				for (let i = 0; i < h2.length; i++) {

					h2[i].innerHTML = h2[i].dataset.yearly;
					span[i].innerHTML = span[i].dataset.yearly;
				}
			}
		}