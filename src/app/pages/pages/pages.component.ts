import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

declare function customInit(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  year: number = new Date().getFullYear();
  theme: string | null=null;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.getTheme();
    customInit();
  }

}
