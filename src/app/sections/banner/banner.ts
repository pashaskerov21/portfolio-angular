import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
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
export class Banner {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
