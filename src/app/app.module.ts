import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { BaseButtonComponent } from './components/base-button/base-button.component';
import { BaseLayoutComponent } from './layouts/base/base.component';
import { IconChevronComponent } from './components/icon-chevron/icon-chevron.component';
import { IconLogoutComponent } from './components/icon-logout/icon-logout.component';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { SelectCharacterComponent } from './components/select-character/select-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { ModulesComponent } from './components/modules/modules.component';
import { FightComponent } from './pages/fight/fight.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EditComponent } from './pages/edit/edit.component';
import { EditCharacterComponent } from './components/edit-character/edit-character.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		CharactersComponent,
		BaseButtonComponent,
		BaseLayoutComponent,
		IconChevronComponent,
		IconLogoutComponent,
		IconUserComponent,
		SelectCharacterComponent,
		CharacterDetailsComponent,
		ModulesComponent,
		FightComponent,
		ProgressBarComponent,
		EditComponent,
		EditCharacterComponent,
		DropdownComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
