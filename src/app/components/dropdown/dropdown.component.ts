import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
	@Input() options: string[] = [];
	@Input() selected: string = '';
	@Output() selectedChange = new EventEmitter<string>();

	show: boolean = false;

	select(option: string) {
		this.show = false;
		this.selectedChange.emit(option);
	}
}
