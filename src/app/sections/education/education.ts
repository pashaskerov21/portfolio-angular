import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [NgFor],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
