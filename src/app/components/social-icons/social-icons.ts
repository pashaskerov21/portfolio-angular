import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-social-icons',
  imports: [NgClass],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.scss'
})
export class SocialIcons {
  @Input() className: string = '';
  @Input() menuOpen?: boolean;
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
