import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { LoginComponent } from './pages/login/login.component';
import { FightComponent } from './pages/fight/fight.component';
import { EditComponent } from './pages/edit/edit.component';
import { BaseLayoutComponent } from './layouts/base/base.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		canActivateChild: [AuthGuard],
		children: [
			{ path: '', redirectTo: 'characters', pathMatch: 'full' },
			{ path: 'characters', component: CharactersComponent },
			{ path: 'fight', component: FightComponent },
			{ path: 'edit', component: EditComponent },
		],
	},
	{ path: 'login', component: LoginComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
