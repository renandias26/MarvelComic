import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {path: 'login', component: LoginComponent},
    {
        path: 'menu',
        component: SidebarComponent,
        canActivate: [],
        children: [
        ]   
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
    exports: [RouterModule],
    declarations: [],
    providers: []
})


export class AppRoutingModule {

}
