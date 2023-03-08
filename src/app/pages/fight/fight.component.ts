import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { normalizeName } from 'src/app/utils';

@Component({
	selector: 'app-fight',
	templateUrl: './fight.component.html',
	styleUrls: ['./fight.component.scss'],
})
export class FightComponent {
	constructor(private route: ActivatedRoute) {}

	hasWinner = false;

	lightCharacter = {
		id: '',
		name: '',
		health: 100,
	};

	darkCharacter = {
		id: '',
		name: '',
		health: 100,
	};

	game() {
		const damage = 12;
		const delayBetweenAttacks = 500;

		const attack = () => {
			const rnd = Math.floor(Math.random() * 2);

			setTimeout(() => {
				switch (rnd) {
					case 1:
						if (this.lightCharacter.health - damage < 0) {
							this.lightCharacter.health = 0;
						} else {
							this.lightCharacter.health -= damage;
						}
						break;
					case 0:
						if (this.darkCharacter.health - damage < 0) {
							this.darkCharacter.health = 0;
						} else {
							this.darkCharacter.health -= damage;
						}
						break;
					default:
						break;
				}

				if (
					this.lightCharacter.health == 0 ||
					this.darkCharacter.health == 0
				) {
					this.checkWinner();
				} else {
					attack();
				}
			}, delayBetweenAttacks);
		};

		attack();
	}

	checkWinner() {
		this.hasWinner = true;
		if (this.lightCharacter.health == 0) {
			document
				.querySelector('.fight-page__wrapper')
				?.classList.add('fight-page__wrapper--has-dark-winner');
		} else {
			document
				.querySelector('.fight-page__wrapper')
				?.classList.add('fight-page__wrapper--has-light-winner');
		}
	}

	ngOnInit() {
		this.lightCharacter.id = this.route.snapshot.queryParams['lid'];
		this.darkCharacter.id = this.route.snapshot.queryParams['did'];

		this.lightCharacter.name = normalizeName(
			this.route.snapshot.queryParams['lname']
		);
		this.darkCharacter.name = normalizeName(
			this.route.snapshot.queryParams['dname']
		);

		setTimeout(() => {
			this.game();
		}, 1500);
	}
}
