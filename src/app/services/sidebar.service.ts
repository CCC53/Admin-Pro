import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      options: [
        { title: 'Dashboard', url: '/' },
        { title: 'ProgessBar', url: 'progress' },
        { title: 'Graficas', url: 'charts' },
        { title: 'Promesas', url: 'promises' },
        { title: 'RXJS', url: 'rxjs' }
      ]
    }
  ]

  constructor() { }
}
