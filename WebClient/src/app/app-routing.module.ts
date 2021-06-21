import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from 'src/app/core/services';

import { SidebarLayoutComponent } from './layout/sidebar-layout';
import { AuthenticateComponent, DashboardComponent } from './views';

const routes: Routes = [
  {
    path: 'notes',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/notes').then(m => m.NotesModule) }],
    canActivate: [AuthGuard]
  },
  {
    path: 'ask-me',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/ask-me').then(m => m.AskMeModule) }],
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/profile').then(m => m.ProfileModule) }],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: SidebarLayoutComponent,
    children: [{ path: '', component: DashboardComponent }],
    canActivate: [AuthGuard]
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: '',
    redirectTo: '/authenticate',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/authenticate'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
