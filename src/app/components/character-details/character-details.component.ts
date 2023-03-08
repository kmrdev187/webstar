import { Component, Input } from '@angular/core';
import type { Character } from 'src/types';

@Component({
	selector: 'character-details',
	templateUrl: './character-details.component.html',
	styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
	@Input() side: Character['side'] | undefined = 'DARK';
	@Input() power: Character['force']['power'] | undefined = '';
}
