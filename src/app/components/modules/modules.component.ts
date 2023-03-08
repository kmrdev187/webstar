import { Component, Input } from '@angular/core';
import { Character } from 'src/types';
import { SimulateService } from 'src/app/services/simulate.service';
import { Router } from '@angular/router';

@Component({
	selector: 'modules',
	templateUrl: './modules.component.html',
	styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent {
	constructor(
		private simulateService: SimulateService,
		private router: Router
	) {}

	@Input() characters: Character[] = [];

	lightCharacters: Character[] = [];
	darkCharacters: Character[] = [];

	selectedLight: Character | null = null;
	selectedDark: Character | null = null;

	showModal: boolean = false;

	error: string = '';

	showCharacterModal() {
		this.showModal = true;
		this.error = '';
		this.selectedDark = null;
		this.selectedLight = null;
	}

	selectCharacters() {
		if (this.selectedLight && this.selectedDark) {
			this.showModal = false;
		} else {
			this.error = 'Válassz mind a két oldalról egy karaktert!';
		}
	}

	simulate() {
		if (this.selectedLight && this.selectedDark) {
			this.simulateService
				.postSimulate(this.selectedDark.id, this.selectedLight.id)
				.subscribe({
					next: (res) => {
						// console.log(res);
						this.router.navigate(['/fight'], {
							queryParams: {
								lid: this.selectedLight?.id,
								did: this.selectedDark?.id,
								lname: this.selectedLight?.name,
								dname: this.selectedDark?.name,
							},
						});
					},
					error: (err) => {
						console.log(err);
					},
				});
		}
	}

	ngOnInit() {
		if (this.characters.length) {
			this.lightCharacters = this.characters.filter(
				(c) => c.side === 'LIGHT'
			);
			this.darkCharacters = this.characters.filter(
				(c) => c.side === 'DARK'
			);
		}
	}
}
