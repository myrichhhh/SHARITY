import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProjectsPageRoutingModule } from './list-projects-routing.module';

import { ListProjectsPage } from './list-projects.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProjectsPageRoutingModule
  ],
  declarations: [ListProjectsPage]
})
export class ListProjectsPageModule {}
