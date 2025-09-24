import { Component, OnInit, Renderer2, RendererFactory2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api/api';
import { HttpClientModule } from '@angular/common/http';
import { Header } from "./partials/header/header";
import { Footer } from "./partials/footer/footer";
import { ThemeService } from './theme.service';
import { PersonalInformationDataType } from '../types';
import { Meta, Title } from '@angular/platform-browser';
import { SocialIcons } from "./components/social-icons/social-icons";
import { ScrollButton } from "./components/scroll-button/scroll-button";
import { Preloader } from "./components/preloader/preloader";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, Header, Footer, SocialIcons, ScrollButton, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private renderer: Renderer2;
  protected readonly title = signal('Hello, portfolio-angular');
  personalData: PersonalInformationDataType | null = null;

  constructor(private apiService: ApiService, private titleService: Title, private metaService: Meta, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.loadInformation();

    if (this.personalData !== null) {
      // Standard meta tags
      this.titleService.setTitle(this.personalData.title);
      this.metaService.updateTag({ name: 'description', content: this.personalData.description });
      this.metaService.updateTag({ name: 'keywords', content: this.personalData.keywords });
      this.metaService.updateTag({ name: 'author', content: this.personalData.author_name });
      // OpenGraph
      this.metaService.updateTag({ property: 'og:title', content: this.personalData.title });
      this.metaService.updateTag({ property: 'og:description', content: this.personalData.description });
      this.metaService.updateTag({ property: 'og:type', content: 'website' });
      this.metaService.updateTag({ property: 'og:image', content: this.personalData.image });
      // Twitter
      this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.metaService.updateTag({ name: 'twitter:title', content: this.personalData.title });
      this.metaService.updateTag({ name: 'twitter:description', content: this.personalData.description });
      this.metaService.updateTag({ name: 'twitter:image', content: this.personalData.image });
      this.metaService.updateTag({ name: 'twitter:creator', content: this.personalData.author_name });
      // Canonical link
      const canonicalLink: HTMLLinkElement = this.renderer.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', `${this.personalData.author_url}`);
      this.renderer.appendChild(document.head, canonicalLink);
      // Author link
      const authorLink: HTMLLinkElement = this.renderer.createElement('link');
      authorLink.setAttribute('rel', 'author');
      authorLink.setAttribute('href', `${this.personalData.author_url}`);
      this.renderer.appendChild(document.head, authorLink);
    }
  }

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
}
