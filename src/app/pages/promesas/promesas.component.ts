import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(users => console.log(users));
  }

  async getUsers() {
    const res = await fetch('https://reqres.in/api/users?page=2');
    const { data } = await res.json();
    return data;
  }

}
