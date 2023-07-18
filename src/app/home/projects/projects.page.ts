import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage {
  @ViewChild(IonModal)
  modal!: IonModal;

  title!: string;
  description!: string;
  showSubMenu: boolean = false;

  constructor(private router: Router) {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.title, 'confirm');
    this.modal.dismiss(this.description, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.title = `${ev.detail.data}`;
      this.description = `${ev.detail.data}`;
    }
  }

  navigateToDashboard() {
    // Logic to navigate to the dashboard page
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToProjects() {
    // Logic to navigate to the projects page
  }

  logout() {
    // Logic to perform logout action
  }

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
