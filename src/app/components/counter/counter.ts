import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [NgIf],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  @Input() value!: number;
  @Input() title!: string;
  @Input() speed!: number;

  @ViewChild('counterItem') counterItem!: ElementRef<HTMLDivElement>;

  count = 0;
  counterStatus = false;
  private started = false;   // birdən çox işləməsin deyə

  constructor(private cdr: ChangeDetectorRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.counterItem || this.started) return;

    const offsetTop = this.counterItem.nativeElement.offsetTop;
    const triggerPoint = offsetTop - window.innerHeight + 200; // 200px qabaqdan başlasın

    if (window.scrollY > triggerPoint) {
      this.counterStatus = true;
      this.startCounter();
    }

  }

  startCounter() {
    if (this.started) return;
    this.started = true;

    let startValue = 0;
    let endValue = this.value;
    let remainder = 0;
    let step = 1;
    const countSecond = this.speed;

    if (endValue <= 100) {
      step = 1;
    } else if (endValue > 100 && endValue <= 1000) {
      step = 10;
      remainder = this.value % 10;
      endValue = this.value - remainder;
    } else if (endValue > 1000 && endValue < 5000) {
      step = 25;
      remainder = this.value % 25;
      endValue = this.value - remainder;
    } else if (endValue >= 5000) {
      step = 50;
      remainder = this.value % 50;
      endValue = this.value - remainder;
    }

    const counter = setInterval(() => {
      startValue += step;

      if (startValue >= endValue) {
        clearInterval(counter);
        this.count = this.value; // son dəyəri dəqiq göstər
      } else {
        this.count = startValue;
      }
      this.cdr.detectChanges();
    }, countSecond);
  }
}
