import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

  @Input() title: string = '';
  @Input() label: Label[] = [];
  @Input() data: MultiDataSet = [];

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ] }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
