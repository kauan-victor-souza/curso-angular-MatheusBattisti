import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interface/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 2},
    {name: "Tom", type: "Cat", age: 5},
    {name: "Dino", type: "Horse", age: 10},
    {name: "Frida", type: "Cat", age: 9}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
