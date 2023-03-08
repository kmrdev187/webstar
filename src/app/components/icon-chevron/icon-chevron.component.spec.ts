import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconChevronComponent } from './icon-chevron.component';

describe('ChevronComponent', () => {
	let component: IconChevronComponent;
	let fixture: ComponentFixture<IconChevronComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [IconChevronComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(IconChevronComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
