import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api/api';
import { PersonalInformationDataType } from '../../../types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-social-icons',
  imports: [NgClass],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.scss'
})
export class SocialIcons implements OnInit {
  @Input() className: string = '';
  @Input() menuOpen?: boolean;
  personalData: PersonalInformationDataType | null = null;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadInformation();
  }

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
