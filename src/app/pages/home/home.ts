import { Component } from '@angular/core';
import { About } from "../../sections/about/about";
import { Banner } from "../../sections/banner/banner";
import { Services } from "../../sections/services/services";
import { Experience } from "../../sections/experience/experience";

@Component({
  selector: 'app-home',
  imports: [About, Banner, Services, Experience],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
