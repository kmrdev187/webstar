import { Component, SimpleChanges } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import type { Character, characterChangeEvent } from 'src/types';
import { normalizeName as _normalizeName } from 'src/app/utils';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
	constructor(private characterService: CharacterService) {}

	characters: Character[] = [];
    queriedCharacters: Character[] = []
    showEdit = false
    characterForEdit: Character | null = null;
    selectedCharacterIndex: number = 0;

    nameQuery: string = ''

	normalizeName = _normalizeName;

    handleCharacterChange(event: characterChangeEvent) {
        if(event.index !== -1) {
            this.characters[event.index] = event.character
        } else {
            this.characters.push(event.character);
        }
    }

    filterName() {
        if(this.nameQuery != '') {
            this.queriedCharacters = this.characters.filter(c => {
                return c.name.match(new RegExp(this.nameQuery, 'gi')) !== null
            })
        } else {
            this.queriedCharacters = []
        }
    }

    createCharacter() {
        this.showEdit = true
        this.selectedCharacterIndex = -1
    }

	copyRow(index: number) {
		const copy = this.characters[index];
		this.characters.splice(index + 1, 0, copy);
	}

	modifyRow(index: number) {
        this.showEdit = true
        this.characterForEdit = this.characters[index]
        this.selectedCharacterIndex = index
    }

	deleteRow(index: number) {
		this.characters.splice(index, 1);
	}

	sortByProperty(
		property: string,
		direction: 'up' | 'down',
		secondProp?: boolean
	) {
		if (secondProp) {
			if (direction == 'up') {
				if (property == 'midichlorian') {
					this.characters.sort((a, b) => {
						return a.force[property as keyof Character['force']] >
							b.force[property as keyof Character['force']]
							? 1
							: -1;
					});
				} else {
					this.characters.sort((a, b) => {
						return a.force[property as keyof Character['force']] <
							b.force[property as keyof Character['force']]
							? 1
							: -1;
					});
				}
			} else {
				if (property == 'midichlorian') {
					this.characters.sort((a, b) => {
						return a.force[property as keyof Character['force']] <
							b.force[property as keyof Character['force']]
							? 1
							: -1;
					});
				} else {
					this.characters
						.sort((a, b) => {
							return a.force[
								property as keyof Character['force']
							] < b.force[property as keyof Character['force']]
								? 1
								: -1;
						})
						.reverse();
				}
			}
		} else {
			if (direction == 'up') {
				this.characters.sort((a, b) => {
					return a[property as keyof Character] <
						b[property as keyof Character]
						? 1
						: -1;
				});
			} else {
				this.characters
					.sort((a, b) => {
						return a[property as keyof Character] <
							b[property as keyof Character]
							? 1
							: -1;
					})
					.reverse();
			}
		}
	}

	ngOnInit() {
		this.characterService.getCharacters().subscribe({
			next: (res: any) => {
				this.characters = res.characters;
				// fix missing midichlorian value for stormtrooper
				this.characters[5].force['midichlorian'] = 0;
			},
			error: (err) => {
				console.log(err);
			},
		});
	}
}
