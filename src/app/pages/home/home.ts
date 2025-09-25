import { Component, OnDestroy, OnInit } from '@angular/core';
import { About } from "../../sections/about/about";
import { Banner } from "../../sections/banner/banner";
import { Services } from "../../sections/services/services";
import { Experience } from "../../sections/experience/experience";
import { Skills } from "../../sections/skills/skills";
import { Projects } from "../../sections/projects/projects";
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { Education } from "../../sections/education/education";
import { Contact } from "../../sections/contact/contact";

@Component({
  selector: 'app-home',
  imports: [About, Banner, Services, Experience, Skills, Projects, Education, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
  skillsData: SkillDataType[] = [];
  projectsData: ProjectDataType[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.route.snapshot.data['data'];
    if (data) {
      this.personalData = data.personal;
      this.skillsData = data.skills;
      this.projectsData = data.projects;
    }
  }
}
