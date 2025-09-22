import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-preloader',
  imports: [Logo],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss'
})
export class Preloader implements OnInit {
  loading: boolean = true;
  percent: number = 0;
  private started = false;
  showLogo: boolean = false;

  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {

    this.percentCounter();

    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 3300);
  }

  percentCounter = () => {
    if (this.started) return;
    this.started = true;
    let start = 0;
    let end = 100;

    const counter = setInterval(() => {
      start += 1;
      if(start === end){
        clearInterval(counter);
        this.percent = 100;
        setTimeout(() => {
          this.showLogo = true;
          this.cdr.detectChanges();
        }, 500);
      }else{
        this.percent = start;
      }
      this.cdr.detectChanges();
    },10)
  }

}
