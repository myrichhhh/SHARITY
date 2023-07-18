import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page'; 
import { ProfileRoutingModule } from './profile-routing.module'; // Add the profile routing module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileRoutingModule // Include the profile routing module
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
