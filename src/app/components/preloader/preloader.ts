import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Logo } from "../logo/logo";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preloader',
  imports: [Logo],
  templateUrl: './preloader.html',
  styleUrl: './preloader.scss'
})
export class Preloader implements OnInit, OnDestroy {
  loading: boolean = true;
  percent: number = 0;
  showLogo: boolean = false;
  private started = false;
  private routerSubscription: Subscription = new Subscription();
  private counterInterval: any;

  constructor(private cdr: ChangeDetectorRef, private router: Router) { }
  ngOnInit(): void {
    this.startPreloader();

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.startPreloader();
      }
      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        
      }
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }
  }

  private startPreloader(): void {
    // Reset all states
    this.loading = true;
    this.percent = 0;
    this.showLogo = false;
    this.started = false;

    // Clear any existing interval
    if (this.counterInterval) {
      clearInterval(this.counterInterval);
    }

    this.cdr.detectChanges();
    this.percentCounter();
  }
  private percentCounter = (): void => {
    if (this.started) return;
    this.started = true;

    let start = 0;
    const end = 100;

    this.counterInterval = setInterval(() => {
      start += 1;
      this.percent = start;

      if (start === end) {
        clearInterval(this.counterInterval);
        this.counterInterval = null;

        setTimeout(() => {
          this.showLogo = true;
          this.cdr.detectChanges();

          // Hide preloader after showing logo
          setTimeout(() => {
            this.loading = false;
            this.started = false;
            this.cdr.detectChanges();
          }, 1500); // Adjust timing as needed
        }, 300);
      }

      this.cdr.detectChanges();
    }, 10); // Slightly slower for better UX
  }

}
