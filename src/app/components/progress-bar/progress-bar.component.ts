import { Component, Input } from '@angular/core';

@Component({
	selector: 'progress-bar',
	templateUrl: './progress-bar.component.html',
	styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
	@Input() value: number = 0;
	@Input() type: 'light' | 'dark' = 'dark';
}
