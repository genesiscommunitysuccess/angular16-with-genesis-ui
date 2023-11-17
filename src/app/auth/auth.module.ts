import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { authProviders } from './auth.data';

@NgModule({
  imports: [
    CommonModule,
    AuthComponent,
    AuthRoutingModule
  ],
  providers: [
    ...authProviders,
  ]
})
export class AuthModule { }
