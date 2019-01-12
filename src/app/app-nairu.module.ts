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

// Services
import { LoginService } from './services/login.service';

// PrimeNG
import { MessageService } from 'primeng/components/common/messageservice';

const exportedComponents = [
  LoginPageComponent,
  AdminMenuComponent,
  UserMenuComponent
];

const exportedServices = [
  LoginService,
  MessageService
];

@NgModule({
    imports: [PrimengModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule, AngularWebStorageModule],
    exports: [...exportedComponents, PrimengModule],
    providers: [...exportedServices],
    declarations: [...exportedComponents]
})
export class NairuModule { }
