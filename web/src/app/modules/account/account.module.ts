import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Account Module Routing
import { AccountRoutingModule } from './account-routing.module';

// Components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AccountRoutingModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountModule { }