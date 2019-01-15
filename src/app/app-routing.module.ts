import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { UserMenuComponent } from './pages/user-menu/user-menu.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { TestsListComponent } from './pages/tests-list/tests-list.component';
import { SessionsListComponent } from './pages/sessions-list/sessions-list.component';
import { AdminStatisticsComponent } from './pages/admin-statistics/admin-statistics.component';
import { AdminGradesComponent } from './pages/admin-grades/admin-grades.component';
import { PublicListComponent } from './pages/public-list/public-list.component';
import { StudentQstartComponent } from './pages/student-qstart/student-qstart.component';

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
    // Admin
    {
        path: 'admin',
        pathMatch: 'full',
        component: AdminMenuComponent,
    },
    {
        path: 'admin/profile/:id',
        pathMatch: 'full',
        component: AdminProfileComponent
    },
    {
        path: 'admin/quiz/:quizId',
        data: {
            mode: QUIZ_FORM_STATE.EDIT
        },
        component: QuizFormComponent
    },
    {
        path: 'admin/quiz',
        data: {
            mode: QUIZ_FORM_STATE.NEW
        },
        component: QuizFormComponent
    },
    {
        path: 'admin/quiz-list',
        pathMatch: 'full',
        component: TestsListComponent
    },
    {
        path: 'admin/quiz/:quizId/view',
        data: {
            mode: QUIZ_FORM_STATE.VIEW
        },
        component: QuizFormComponent
    },
    {
        path: 'admin/sessions',
        pathMatch: 'full',
        component: SessionsListComponent
    },
    {
        path: 'admin/statistics',
        pathMatch: 'full',
        component: AdminStatisticsComponent
    },
    {
        path: 'admin/grades',
        pathMatch: 'full',
        component: AdminGradesComponent
    },
    // Student
    {
        path: 'student',
        pathMatch: 'full',
        component: UserMenuComponent,
    },
    {
        path: 'student/profile/:id',
        component: UserProfileComponent,
        pathMatch: 'full',
    },
    {
        path: 'student/tests',
        pathMatch: 'full',
        component: PublicListComponent
    },
    {
        path: 'student/enterCode',
        pathMatch: 'full',
        component: StudentQstartComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
