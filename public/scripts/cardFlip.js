class CardFlip extends HTMLElement {
	constructor() {
		super();

		this.addEventListener('click', () => {
			trackClickedItem(this);
		});

		this.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault(); // Prevent scrolling on Space
				this.click(); // Trigger the existing click event
			}
		});

		function trackClickedItem(card) {
			const todaysDate = new Date().getDate();

			if (todaysDate == card.id || todaysDate > card.id) {
				card.classList.add('opened');
				const cardID = card.id;
				const clickedCards = JSON.parse(localStorage.getItem('clickedCards')) || [];

				if (clickedCards.length === 0 || !clickedCards.includes(cardID)) {
					clickedCards.push(cardID);
					localStorage.setItem('clickedCards', JSON.stringify(clickedCards));
				}
			} else {
				alert('Hey! No cheating!');
			}
		}

		function rememberClickedCards() {
			const clickedCards = JSON.parse(localStorage.getItem('clickedCards'));

			if (clickedCards) {
				clickedCards.forEach((card) => {
					const cardElement = document.getElementById(card);
					if (cardElement && !cardElement.classList.contains('opened')) {
						cardElement.classList.add('opened');
					}
				});
			}
		}

		document.addEventListener('DOMContentLoaded', rememberClickedCards);
	}
}

customElements.define('christmas-card', CardFlip);
