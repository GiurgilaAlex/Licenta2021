import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SidebarLayoutComponent } from './layout/sidebar-layout';
import { AuthenticateComponent, DashboardComponent } from './views';


const routes: Routes = [
  {
    path: 'notes',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/notes').then(m => m.NotesModule) }]
  },
  {
    path: 'games',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/games').then(m => m.GamesModule) }]
  },
  {
    path: 'ask-me',
    component: SidebarLayoutComponent,
    children: [{ path: '', loadChildren: async () => import('./features/ask-me').then(m => m.AskMeModule) }]
  },
  {
    path: 'dashboard',
    component: SidebarLayoutComponent,
    children: [{ path: '', component: DashboardComponent }]
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
