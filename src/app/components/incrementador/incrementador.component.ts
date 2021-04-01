import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @Input() progress: number = 0;
  @Input() btnClass: string = 'btn-info';

  @Output() newProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.newProgress.emit(100);
      return;
    }
    
    if (this.progress <= 0 && value < 0) {
      this.newProgress.emit(0);
      return;
    }

    this.progress += value;
    this.newProgress.emit(this.progress);
  }

  onChanges(event: number) {
    
    if (event >= 100) {
      this.progress = 100;
    } else if(event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }
    this.newProgress.emit(this.progress);

  }

}
