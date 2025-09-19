import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  imports: [],
  templateUrl: './scroll-button.html',
  styleUrl: './scroll-button.scss'
})
export class ScrollButton {
  scrollValue = 0;
  visible = false;

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  onWindowScroll() {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollValue = Math.round((pos * 100) / calcHeight);

    this.visible = pos > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
