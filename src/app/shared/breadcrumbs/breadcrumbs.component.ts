import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {

  title?: string;
  titleSubs$: Subscription


  constructor(private router: Router) {
    this.titleSubs$ = this.getDataFromRoutes().subscribe(data => {
      this.title = data.title;
    })
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }
  
  getDataFromRoutes() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd && !event.snapshot.firstChild),
      map(event => event.snapshot.data)
    );
  }

}
