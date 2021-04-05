import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  linkTheme = document.querySelector('#theme');
  theme: string | null=null;

  constructor() { }

  checkCurrentTheme(links: NodeListOf<Element>) {
    if (links) {
      links.forEach(link => {
        link.classList.remove('working');
        const btnTheme = link.getAttribute('data-theme');
        const btnUrl = `./assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme?.getAttribute('href');
        if (btnUrl === currentTheme) {
          link.classList.add('working');
        }
      });
    }
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }

  getTheme() {
    this.theme = localStorage.getItem('theme');
    if (this.theme) {
      this.linkTheme?.setAttribute('href', this.theme);
    } else {
      this.linkTheme?.setAttribute('href', './assets/css/colors/default-dark.css');
    }
  }
  
}
