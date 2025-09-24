import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
