import { Component } from '@angular/core';
import { Projects } from "../../sections/projects/projects";
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../../../types';
import { Services } from "../../sections/services/services";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  imports: [Projects, Services],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss'
})
export class ProjectsPage {
  personalData: PersonalInformationDataType | null = null;
  skillsData: SkillDataType[] = [];
  projectsData: ProjectDataType[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data['data'];
    this.personalData = data.personal;
    this.skillsData = data.skills;
    this.projectsData = data.projects;
  }
}
