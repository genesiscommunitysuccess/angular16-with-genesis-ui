import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authHostPath } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  /**
   * Re-direct to dashboard when the route / is hit.
   */
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /**
   * Main dashboard, guarded by our AuthGuard.
   */
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  /**
   * An example of lazy loading a micro frontend.
   */
  { path: authHostPath, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard] },
  /**
   * Catch all to not-found.
   */
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
