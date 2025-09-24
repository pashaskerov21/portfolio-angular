import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { Counter } from "../../components/counter/counter";
import { SocialIcons } from "../../components/social-icons/social-icons";

@Component({
  selector: 'app-about',
  imports: [Counter, SocialIcons],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
