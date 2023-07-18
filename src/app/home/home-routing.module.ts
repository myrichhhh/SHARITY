import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../home/profile/profile.module').then( m => m.ProfilePageModule) 
  },
  {
    path: 'list-projects',
    loadChildren: () => import('./list-projects/list-projects.module').then( m => m.ListProjectsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
