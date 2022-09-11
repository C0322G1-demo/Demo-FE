import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {LoginComponent} from './security/login/login.component';
import {ToastrModule} from 'ngx-toastr';
import {HeaderComponent} from './component/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResetPasswordComponent } from './security/reset-password/reset-password.component';
import { VerityResetPasswordComponent } from './security/verity-reset-password/verity-reset-password.component';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    LoginComponent,
    HeaderComponent,
    ResetPasswordComponent,
    VerityResetPasswordComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
