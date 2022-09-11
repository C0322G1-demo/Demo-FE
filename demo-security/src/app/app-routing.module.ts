import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {LoginComponent} from './security/login/login.component';
import {AuthGuard} from './security/auth.guard.';
import {ResetPasswordComponent} from './security/reset-password/reset-password.component';
import {VerityResetPasswordComponent} from './security/verity-reset-password/verity-reset-password.component';
import {CustomerComponent} from './customer/customer.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'reset-password',
    component: ResetPasswordComponent
  }, {
    path: 'verify-reset-password/:name',
    component: VerityResetPasswordComponent
  }, {
    path: 'home/customer',
    component: CustomerComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN', 'ROLE_USER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
