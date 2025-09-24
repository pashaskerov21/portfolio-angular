import { Component } from '@angular/core';
import { Projects } from "../../sections/projects/projects";
import { Services } from "../../sections/services/services";

@Component({
  selector: 'app-projects-page',
  imports: [Projects, Services],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss'
})
export class ProjectsPage {

}
