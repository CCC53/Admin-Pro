import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  title: string = "Ventas";
  label1: Label[] = ['Producto A', 'Producto B', 'Producto C'];
  data1: MultiDataSet = [
    [350,150,250]
  ]

  title2: string = "Descargas";
  label2: Label[] = ['App A', 'App B', 'App C'];
  data2: MultiDataSet = [
    [900,1050,1250]
  ]
  
  title3: string = "Ventas de Aisladores";
  label3: Label[] = ['Normal', 'Alto voltaje', 'Uso industrial'];
  data3: MultiDataSet = [
    [750,500,350]
  ]

  title4: string = "Ventas de Muebles";
  label4: Label[] = ['Sillas', 'Mesas', 'Escritorios'];
  data4: MultiDataSet = [
    [50,130,35]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
