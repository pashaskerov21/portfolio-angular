import { Component } from '@angular/core';
import { About } from "../../sections/about/about";
import { Banner } from "../../sections/banner/banner";

@Component({
  selector: 'app-home',
  imports: [About, Banner],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
