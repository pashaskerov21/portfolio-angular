import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from "../../components/logo/logo";
import { ThemeService } from '../../theme.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ApiService } from '../../api/api';
import { MenuDataType, PersonalInformationDataType } from '../../../types';
import { SocialIcons } from "../../components/social-icons/social-icons";

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo, NgIf, NgFor, SocialIcons],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  menuData: MenuDataType[] = [];
  personalData: PersonalInformationDataType | null = null;
  constructor(private themeService: ThemeService, private apiService: ApiService, private el: ElementRef) { }

  ngOnInit(): void {
    // datalarin sehife yuklenende fetch edilmesi
    this.loadMenu(); 
    this.loadInformation();
  }
  // tema deyisilmesi
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  get currentTheme() {
    return this.themeService.getTheme();
  }


  // menu datanin fetch edilmesi funksiyasi
  loadMenu() {
    this.apiService.getMenu().subscribe({
      next: (data) => {
        this.menuData = data || [];
      },
      error: (err) => {
        console.log('Menu fetch failed', err);
        this.menuData = [];
      }
    })
  }
  // personal datanin fetch edilmesi funksiyasi
  loadInformation() {
    this.apiService.getInformation().subscribe({
      next: (data) => {
        this.personalData = data || null
      },
      error: (err) => {
        console.log('Information fetch failed', err);
        this.personalData = null;
      }
    })
  }


  // mobil menyunun duyme vasitesile ve asagi yuxari surusdurulerek acilib baglanmasi
  menuState: 'closed' | 'half' | 'full' = 'closed';
  private startY = 0;
  private currentY = 0;
  private dragging = false;
  toggleMenu() {
    this.menuState = this.menuState === 'closed' ? 'half' : 'closed';
  }
  onDragStart(event: TouchEvent | MouseEvent) {
    this.dragging = true;
    this.startY = this.getY(event);
  }
  onDragMove(event: TouchEvent | MouseEvent) {
    if (!this.dragging) return;
    this.currentY = this.getY(event);
    const diff = this.startY - this.currentY;

    if (diff > 50) this.menuState = 'full';   
    if (diff < -50) this.menuState = 'closed'; 
  }
  onDragEnd(event: TouchEvent | MouseEvent) {
    this.dragging = false;
  }
  private getY(event: TouchEvent | MouseEvent): number {
    return event instanceof TouchEvent ? event.touches[0].clientY : (event as MouseEvent).clientY;
  }
  // menyudan basqa yere klik olunduqda menyunun baglanmasi funskiyasi
  @HostListener('document:pointerdown', ['$event'])
  onClickOutside(event: MouseEvent) {
    const menu = this.el.nativeElement.querySelector('.mobile-menu');
    const button = this.el.nativeElement.querySelector('.menu-button');

    if (
      this.menuState !== 'closed' &&         
      menu && !menu.contains(event.target as Node) && 
      button && !button.contains(event.target as Node) 
    ) {
      this.menuState = 'closed';
    }
  }

  //headerin fixed olmasi
  fixedTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 400) {
      this.fixedTop = true;
    } else {
      this.fixedTop = false;
    }
  }

}
