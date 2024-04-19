import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CreatorsComponent } from './creators/creators.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics/comics.component';

export const routes: Routes = [
    {
    path: 'creators',
    component: CreatorsComponent
    },
    {
    path: 'heroes',
    component: HeroesComponent
    },
    {
    path: 'comics',
    component: ComicsComponent
    },
    {
    path: '',
    redirectTo: '/creators',
    pathMatch: 'full'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: []
})


export class AppRoutingModule {

}