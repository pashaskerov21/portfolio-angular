import { Component, OnInit } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { ApiService } from '../../api/api';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner implements OnInit {
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
