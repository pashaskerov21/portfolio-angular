import { Component } from '@angular/core';
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
  skillsData: SkillDataType[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    // datalarin sehife yuklenende fetch edilmesi
    this.loadSkills();
  }
  // skill datanin fetch edilmesi funksiyasi
  loadSkills() {
    this.apiService.getSkills().subscribe({
      next: (data) => {
        this.skillsData = data || []
      },
      error: (err) => {
        console.log('Information fetch failed', err);
        this.skillsData = [];
      }
    })
  }
}
