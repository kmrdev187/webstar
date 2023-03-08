import { Component, Input, Attribute } from '@angular/core';

@Component({
	selector: 'base-button',
	templateUrl: './base-button.component.html',
	styleUrls: ['./base-button.component.scss'],
})
export class BaseButtonComponent {
	@Input() variant: 'primary' | 'secondary' | 'secondary-black' = 'primary';
	type: string;

	constructor(@Attribute('type') _type: string = 'button') {
		this.type = _type;
	}
}
