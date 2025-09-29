import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from "../../components/logo/logo";
import { ThemeService } from '../../theme.service';
import { NgFor, NgIf } from '@angular/common';
import { MenuDataType, PersonalInformationDataType } from '../../../types';
import { SocialIcons } from "../../components/social-icons/social-icons";
import { ScrollToDirective } from "./scroll-to.directive";

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logo, NgFor, SocialIcons, NgIf, ScrollToDirective],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  @Input() personalData: PersonalInformationDataType = {} as PersonalInformationDataType;
  @Input() menuData: MenuDataType[] = [];
  constructor(private themeService: ThemeService, private el: ElementRef) { }


  // tema deyisilmesi
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  get currentTheme() {
    return this.themeService.getTheme();
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
  scrollValue = 0;
  visible = false;

  @HostListener('window:scroll', [])
  @HostListener('window:load', [])
  onWindowScroll() {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollValue = Math.round((pos * 100) / calcHeight);

    this.fixedTop = pos > 100;
  }

}
