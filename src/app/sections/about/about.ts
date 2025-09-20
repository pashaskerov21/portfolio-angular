import { Component, OnInit } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { ApiService } from '../../api/api';
import { Counter } from "../../components/counter/counter";
import { SocialIcons } from "../../components/social-icons/social-icons";

@Component({
  selector: 'app-about',
  imports: [Counter, SocialIcons],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
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
