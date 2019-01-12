import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { UserMenuComponent } from './pages/user-menu/user-menu.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';

// Variables
import { QUIZ_FORM_STATE } from './models/QUIZ_FORM_STATE';

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
    },
    {
        path: 'admin-profile',
        pathMatch: 'full',
        component: AdminProfileComponent
    },
    {
        path: 'user-profile',
        pathMatch: 'full',
        component: UserProfileComponent
    },
    {
        path: 'quiz/:quizId',
        data: {
            mode: QUIZ_FORM_STATE.EDIT
        },
        component: QuizFormComponent
    },
    {
        path: 'quiz',
        data: {
            mode: QUIZ_FORM_STATE.NEW
        },
        component: QuizFormComponent
    },
    {
        path: 'quiz/:quizId/view',
        data: {
            mode: QUIZ_FORM_STATE.VIEW
        },
        component: QuizFormComponent
    },
    // Aici o sa vina pentru ecranul de select
    // De facut children routes neaparat
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
