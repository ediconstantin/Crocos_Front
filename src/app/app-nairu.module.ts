import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengModule } from './app-primeng.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';

// Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { UserMenuComponent } from './pages/user-menu/user-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { SelectQuizComponent } from './components/select-quiz/select-quiz.component';
import { TestsListComponent } from './pages/tests-list/tests-list.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LayoutPageComponent } from './components/layout-page/layout-page.component';
import { SessionsListComponent } from './pages/sessions-list/sessions-list.component';
import { AdminStatisticsComponent } from './pages/admin-statistics/admin-statistics.component';
import { AdminGradesComponent } from './pages/admin-grades/admin-grades.component';
import { QuestionAddComponent } from './components/question-add/question-add.component';
import { StudentGradesComponent } from './pages/student-grades/student-grades.component';
import { StudentQstartComponent } from './pages/student-qstart/student-qstart.component';
import { PublicListComponent } from './pages/public-list/public-list.component';


// Services
import { LoginService } from './services/login.service';
import { QuizService } from './services/quiz-service.service';
import { UserProfileService } from './services/user-profile.service';
import { AdminProfileService } from './services/admin-profile.service';


// Interceptors
import { AuthInterceptorService } from './services/auth-interceptor.service';

// PrimeNG
import { MessageService } from 'primeng/components/common/messageservice';

const exportedComponents = [
  LoginPageComponent,
  AdminMenuComponent,
  UserMenuComponent,
  HeaderComponent,
  AdminProfileComponent,
  UserProfileComponent,
  SubHeaderComponent,
  QuizFormComponent,
  SelectQuizComponent,
  TestsListComponent,
  QuizComponent,
  LayoutPageComponent,
  SessionsListComponent,
  AdminStatisticsComponent,
  AdminGradesComponent,
  QuestionAddComponent,
  StudentGradesComponent,
  StudentQstartComponent,
  PublicListComponent
];

const exportedServices = [
  LoginService,
  MessageService,
  QuizService,
  UserProfileService,
  AdminProfileService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },

];

@NgModule({
    imports: [PrimengModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, AngularWebStorageModule],
    exports: [...exportedComponents, PrimengModule],
    providers: [...exportedServices],
    declarations: [...exportedComponents]
})
export class NairuModule { }
