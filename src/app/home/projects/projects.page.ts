import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: any[];
  selectedProject: any;

  constructor(private router: Router) {
    this.projects = [
      {
        image: '../../assets/Project1.png',
        title: 'Project Pawssion',
        subtitle: 'April 27, 2023',
        description: 'A JCI Batangas-Balisong project that helps stray dogs that found their home in dog shelters by giving them vaccines and food.',
      },
      {
        image: '../../assets/Project2.png',
        title: 'Beyond Prison Wall',
        subtitle: 'April 29, 2023',
        description: 'A JCI Batangas-Balisong project that helps PDLs or Persons Deprived of Liberty by giving them food and other necessities as a way of bringing happiness to them despite their current situation.',
      },
      {
        image: '../../assets/Project3.png',
        title: 'Gawad Balisong',
        subtitle: 'Card Subtitle',
        description: 'The Gawad Balisong aims to recognize outstanding Filipino individuals and leaders - living or deceased - who have selflessly demonstrated exceptional character and values, commitment in solving pressing issues, and engagement on different platforms to amplify their voice.',
      },
    ];
  }

  ngOnInit() {
    // Retrieve projects from localStorage if available
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      this.projects = JSON.parse(storedProjects);
    }
  }

  editProject(project: any) {
    this.selectedProject = project;
  }

  addProject() {
    const newProject = {
      image: '../../assets/NewProject.png',
      title: 'New Project',
      subtitle: 'Subtitle',
      description: 'Project description goes here',
    };
    this.projects.unshift(newProject); // Insert new project at the beginning of the array
    this.saveProjectsToStorage();
  }

  saveProject(project: any) {
    this.selectedProject = null;
    // Perform save logic for the project
    console.log('Saving the project:', project);
    this.saveProjectsToStorage();
  }

  cancelEdit() {
    this.selectedProject = null;
  }

  deleteProject(index: number) {
    const deletedProject = this.projects.splice(index, 1);
    console.log('Deleting the project:', deletedProject);
    this.saveProjectsToStorage();
  }

  saveProjectsToStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  navigateToDashboard() {
    console.log('Navigating to the dashboard page');
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToProjects() {
    console.log('Navigating to the projects page');
  }

  logout() {
    console.log('Logging out');
  }
}
