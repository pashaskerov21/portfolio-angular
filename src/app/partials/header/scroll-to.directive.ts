import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
    selector: '[appScrollTo]'
})
export class ScrollToDirective {
    @Input('appScrollTo') targetId!: string;

    constructor(private router: Router){}
    @HostListener('click', ['$event'])
    onClick(event: Event) {
        if (this.router.url === '/' || this.router.url.startsWith('/#')) {
            event.preventDefault();
            const element = document.querySelector(this.targetId) as HTMLElement;
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY - 30; // offset
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
                history.replaceState(null, '', this.targetId);
            }
        }
    }
}
