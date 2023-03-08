import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Character } from 'src/types';
import Swiper from 'swiper';

@Component({
	selector: 'select-character',
	templateUrl: './select-character.component.html',
	styleUrls: ['./select-character.component.scss'],
})
export class SelectCharacterComponent {
	@Input() characters: Character[] = [];
	@Output() charactesChange = new EventEmitter<Character>();

	selectedIndex = 0;

	private swiper: Swiper | null = null;

	setIndex(index: number) {
		if (this.selectedIndex !== index) {
			this.selectedIndex = index;
			this.charactesChange.emit(this.characters[index]);
		}
	}

	stepForward() {
		if (this.selectedIndex !== this.characters.length - 1) {
			this.selectedIndex++;
			this.swiper?.slideTo(this.selectedIndex);
			this.charactesChange.emit(this.characters[this.selectedIndex]);
		}
	}

	stepBack() {
		if (this.selectedIndex > 0) {
			this.selectedIndex--;
			this.swiper?.slideTo(this.selectedIndex);
			this.charactesChange.emit(this.characters[this.selectedIndex]);
		}
	}

	ngOnInit() {
		this.swiper = new Swiper('.swiper', {
			direction: 'horizontal',
			loop: false,
		});

		this.swiper.on('activeIndexChange', (sw) => {
			this.setIndex(sw.activeIndex);
		});
	}
}
