import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [NgIf,NgFor],
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  constructor() { }
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() color!: string;
  @Input() infinite: boolean = false;

  animationDelay = 0.08;
  getFirstNameLetters(){
    return this.firstName ? this.firstName.split('') : [];
  }

  getLastNameLetters(){
    return this.lastName ? this.lastName.split('') : [];
  }
  
}
