import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import type { Character, characterChangeEvent } from 'src/types';

@Component({
  selector: 'edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent {
    constructor(private characterService: CharacterService) {}

    @Input() index: number = 0;
    @Input() character: Character | null = null;
    @Output() characterChanged = new EventEmitter<characterChangeEvent>();
    @Input() show: boolean = false;
    @Output() showChange = new EventEmitter<boolean>()

    characters: Character[] = []

    availablePowers: string[] = []
    availableSides: string[] = ['DARK', 'LIGHT']
    selectedPower: string = ''
    selectedSide: string = ''
    selectedAvatar: string = ''
    selectedMidichlorian: number = 0
    selectedName: string = ''
    selectedDescription: string = ''

    validationError: string = ''

    handleKeydown(event: KeyboardEvent) {
        const validKeys = ['Backspace', 'Delete', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        if(!validKeys.includes(event.key)) event.preventDefault()
    }

    validate() {
        this.validationError = ''
        
        this.selectedDescription == '' && (this.validationError = 'A leírás mező nem lehet üres!');
        typeof this.selectedMidichlorian !== 'number' && (this.validationError = 'Hibás midiklorián érték!');
        this.selectedPower == '' && (this.validationError = 'Válassz egy különleges erőt!');
        this.selectedSide == '' && (this.validationError = 'Válassz egy oldalt!');
        (this.selectedName == '' || this.selectedName.trim().length === 0) && (this.validationError = 'A név mező nem lehet üres!');
        this.selectedAvatar == '' && (this.validationError = 'Válassz egy avatárt!');

        return this.validationError !== '' ? false : true
    }

    save() {
        if(this.validate()) {
            if(this.index !== -1) {
                this.characterChanged.emit({
                    character: {
                        id: this.selectedAvatar,
                        side: this.selectedSide,
                        name: this.selectedName,
                        force: {
                            power: this.selectedPower,
                            midichlorian: this.selectedMidichlorian
                        },
                        description: this.selectedDescription
                    },
                    index: this.index
                })
            } else {
                this.characterChanged.emit({
                    character: {
                        id: this.selectedAvatar,
                        side: this.selectedSide,
                        name: this.selectedName,
                        force: {
                            power: this.selectedPower,
                            midichlorian: this.selectedMidichlorian
                        },
                        description: this.selectedDescription
                    },
                    index: this.index
                })
            }
            this.showChange.emit(false)
        }
    }

    ngDoCheck() {
        if(this.characters?.length && this.availablePowers.length == 0) {
            this.characters.forEach((character) => {
                if(!this.availablePowers.includes(character.force.power)) {
                    this.availablePowers.push(character.force.power)
                }
            })
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['character'] && this.character) {
            // Init values from character input if it exists
            this.selectedPower = changes['character'].currentValue.force.power
            this.selectedSide = changes['character'].currentValue.side
            this.selectedAvatar = changes['character'].currentValue.id
            this.selectedMidichlorian = changes['character'].currentValue.force.midichlorian
            this.selectedName = changes['character'].currentValue.name
            this.selectedDescription = changes['character'].currentValue.description
        }
    }

    ngOnInit() {
        this.characterService.getCharacters().subscribe({
            next: (res: any) => { this.characters = res.characters },
            error: (err: any) => { console.log(err) },
        })
    }
}
