import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent }  from './modules/home/pages/home-page/home-page.component'
import { NgModule } from '@angular/core';
//import { AuthModule } from './modules/auth/auth.module'; // Add this import

export const routes: Routes = [
    {
        path: 'auth', 
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
       path: '',
       component: HomePageComponent,
       loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
       canActivate: []
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

