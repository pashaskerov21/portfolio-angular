import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services{
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
