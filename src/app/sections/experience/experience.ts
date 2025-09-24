import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
