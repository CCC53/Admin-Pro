import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intvervalSubscription?: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.intvervalSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    // this.getObservable().pipe(
    //   retry(2)
    // ).subscribe(res => console.log(res),
    //                error => console.error(error),
    //                () => console.log('Terminado'));
    this. intvervalSubscription = this.getInterval().subscribe(console.log);
  }

  getInterval(): Observable<number> {
    return interval(250).pipe(
      // take(10),
      map(valor => valor+1),
      filter(valor => valor%2 === 0)
    )
  }

  getObservable(): Observable<number> {
    let i = -1;
    return new Observable( observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 5) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 3) {
          i = 0;
          observer.error('Llego a 3 y este es un error provocado');
        }
      }, 1000);
    });
  }

}
