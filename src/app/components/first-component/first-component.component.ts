import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Kauan';
  age: number = 26;
  sexo: string = 'M';
  job: string = 'Design';
  car = {
    nome: "Voyage",
    cor: "Preto",
    modelo: "2020"

  }
  objeto = ['Mesa',' Cadeira',' TV',' PC',' Teclado']
  img: string = 'https://thumbs.dreamstime.com/b/ioga-do-mar-por-sol-da-hormona-calma-viagem-medita%C3%A7%C3%A3o-praia-passadi%C3%A7o-128381503.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
