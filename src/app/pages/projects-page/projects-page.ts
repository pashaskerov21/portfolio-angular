import { Component, OnInit } from '@angular/core';
import { Projects } from "../../sections/projects/projects";
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../../../types';
import { Services } from "../../sections/services/services";
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-page',
  imports: [Projects, Services],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss'
})
export class ProjectsPage implements OnInit {
  personalData: PersonalInformationDataType | null = null;
  skillsData: SkillDataType[] = [];
  projectsData: ProjectDataType[] = [];

  constructor(private route: ActivatedRoute,private titleService: Title) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data['data'];
    if (data) {
      this.personalData = data.personal;
      this.skillsData = data.skills;
      this.projectsData = data.projects;
    }
    this.titleService.setTitle('Alipasha Askerov | Projects')
  }
}
