import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { UserMenuComponent } from './pages/user-menu/user-menu.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginPageComponent
    },
    {
        path: 'admin',
        pathMatch: 'full',
        component: AdminMenuComponent
    },
    {
        path: 'menu',
        pathMatch: 'full',
        component: UserMenuComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
