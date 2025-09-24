import { Component, Input} from '@angular/core';
import { ProjectDataType, SkillDataType } from '../../../types';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [NgFor, RouterLink, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  @Input() projectsData: ProjectDataType[] = [];
  @Input() skillsData: SkillDataType[] = [];


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
