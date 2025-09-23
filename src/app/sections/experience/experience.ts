import { Component } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { ApiService } from '../../api/api';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  personalData: PersonalInformationDataType | null = null;

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    // datalarin sehife yuklenende fetch edilmesi
    this.loadInformation();
  }
  // personal datanin fetch edilmesi funksiyasi
  loadInformation() {
    this.apiService.getInformation().subscribe({
      next: (data) => {
        this.personalData = data || null
      },
      error: (err) => {
        console.log('Information fetch failed', err);
        this.personalData = null;
      }
    })
  }
}
