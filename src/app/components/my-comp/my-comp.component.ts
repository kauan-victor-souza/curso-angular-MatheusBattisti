import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
@Input() serviceData!: {category: string, value: number, time: string}

img1: string = 'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg';
img2: string = 'https://resultadosdigitais.com.br/files/2017/06/bancos-de-imagens.jpg';
img3: string = 'https://cdn.pixabay.com/photo/2018/01/06/07/53/social-3064515__340.jpg';

constructor() { }

  ngOnInit(): void {
  }

}
