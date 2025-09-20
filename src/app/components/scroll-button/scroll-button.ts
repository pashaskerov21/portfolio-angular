import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  imports: [],
  templateUrl: './scroll-button.html',
  styleUrl: './scroll-button.scss'
})
export class ScrollButton {
  visible = false;

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  onWindowScroll() {
    const pos = document.documentElement.scrollTop;
    this.visible = pos > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
