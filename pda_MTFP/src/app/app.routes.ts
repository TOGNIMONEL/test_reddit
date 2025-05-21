import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { PreoccupationsComponent } from './preoccupations/preoccupations.component';
import { PrestationsComponent } from './prestations/prestations.component';

export const routes: Routes = [
    { path:'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent },
    { path: 'preo', component: PreoccupationsComponent },
    { path: 'prestations', component: PrestationsComponent},
    { path: '**', redirectTo: ''},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
