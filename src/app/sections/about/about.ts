import { Component, Input } from '@angular/core';
import { PersonalInformationDataType } from '../../../types';
import { Counter } from "../../components/counter/counter";
import { SocialIcons } from "../../components/social-icons/social-icons";
import { NgIf } from '@angular/common';
import { Logo } from "../../components/logo/logo";

@Component({
  selector: 'app-about',
  imports: [Counter, SocialIcons, NgIf, Logo],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
}
