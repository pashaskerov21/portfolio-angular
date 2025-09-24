import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { ApiService } from '../../api/api';
import SwiperCore, { Swiper } from 'swiper';
import { EffectCube } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

register();

SwiperCore.use([EffectCube]);

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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


  slides = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg'
  ];
}
