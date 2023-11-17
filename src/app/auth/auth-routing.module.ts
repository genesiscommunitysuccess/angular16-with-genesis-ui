import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

/**
 * The route path in the application we're hosting the auth micro frontend on.
 */
export const authHostPath = 'auth';

/**
 * Note the wildcard is important to allow the micro frontend to handle its own sub routes.
 */
const routes: Routes = [{ path: '**', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
