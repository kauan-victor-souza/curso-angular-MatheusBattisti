import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Kauan';
  userData = {
    email: 'k1one.g.vitor@gmail.com',
    role: 'Admin',
    age: 26
  }

  serviceData = {
    category: 'Geral',
    value: 10.5,
    time: '1h'
  }


  title = 'project1-angular';
}
