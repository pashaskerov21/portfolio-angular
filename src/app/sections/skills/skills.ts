import { Component, Input } from '@angular/core';
import { SkillDataType } from '../../../types';
import { ApiService } from '../../api/api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  @Input() skillsData: SkillDataType[] = [];
}
