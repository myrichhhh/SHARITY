import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

import { OverlayEventDetail } from '@ionic/core/components';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;

 
  title!: string;
  description!: string;
  
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss( this.title, 'confirm');
    this.modal.dismiss( this.description, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.title = `${ev.detail.data}`;
      this.description = `${ev.detail.data}`;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
