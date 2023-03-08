import { Component } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import type { Character } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
    constructor(private characterService: CharacterService) {}

    characters: Character[] = [];
    selectedCharacter: Character | null = null;

    handleChange(event: Character) {
        this.selectedCharacter = event
    }

    ngOnInit() {
        this.characterService.getCharacters().subscribe(
            {
                next: (res: any) => {
                    this.characters = res.characters
                    this.selectedCharacter = res.characters[0]
                },
                error: (err) => {
                    console.log(err)
                }
            }
        )
    }
}
