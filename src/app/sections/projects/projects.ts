import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ProjectDataType, SkillDataType } from '../../../types';
import { ApiService } from '../../api/api';
import { NgFor, NgIf } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit, OnDestroy {

  projectsData: ProjectDataType[] = [];
  filteredProjectsData: ProjectDataType[] = [];
  skillsData: SkillDataType[] = [];
  url: string = '';
  private routerSubscription!: Subscription;

  constructor(private apiService: ApiService, private router: Router) { }
  ngOnInit(): void {
    // datalarin sehife yuklenende fetch edilmesi
    this.loadData();
    this.url = this.router.url.toLowerCase();

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadData();
      }
    });
  }
  
  ngOnDestroy(): void {
    // Prevent memory leaks
    this.routerSubscription.unsubscribe();
  }

  private loadData(): void {
    // skill & project api fetch
    this.apiService.getSkills().subscribe({
      next: (data) => {
        this.skillsData = data || [];
      },
      error: (err) => {
        console.log('Information fetch failed', err);
        this.skillsData = [];
      }
    })
    this.apiService.getProjects().subscribe({
      next: (data) => {
        this.projectsData = data || [];
        if (this.projectsData.length > 0) {
          this.filteredProjectsData = this.url === '/projects' ? this.projectsData : this.projectsData.slice(0, 6);
        }
      },
      error: (err) => {
        console.log('Information fetch failed', err);
        this.projectsData = [];
        this.filteredProjectsData = [];
      }
    })
  }
  // project skills
  getProjectSkills(skillNames: string[]) {
    if (skillNames && skillNames.length > 0 && this.skillsData.length > 0) {
      const matchedSkills = skillNames.map((item) => this.skillsData.find((skill) => skill.title === item)).filter((matchedSkill) => matchedSkill !== undefined) as SkillDataType[];
      return matchedSkills;
    }
    return [];
  }

  //category name
  getCategoryName(id: number): string {
    switch (id) {
      case 1:
        return 'fullstack';
      case 2:
        return 'frontend';
      case 3:
        return 'backend';
      default:
        return 'frontend';
    }
  }
}
