import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show; // toggle
  }

  mouseOver(): void {
    this.count += 1
  }

}
