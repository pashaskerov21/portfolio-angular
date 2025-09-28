import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page404',
  imports: [RouterLink],
  templateUrl: './page404.html',
  styleUrl: './page404.scss'
})
export class Page404 implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Alipasha Askerov | 404')
  }
}
