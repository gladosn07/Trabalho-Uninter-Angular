import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uninter';
  data: Array<any> | undefined;

  constructor(){
    this.data = [
      {
        "Name" : "Gladson",
        "RU" : "3285207",
        "Curso" : "Analise e Desenvolvimento de sistemas",
        "Data" : "05/09/1997"
      },
      {
        "Name" : "Lucas",
        "RU" : "0385207",
        "Curso" : "Administrção",
        "Data" : "03/10/1992"
      },
      {
        "Name" : "Mauricio",
        "RU" : "0585207",
        "Curso" : "Portugues",
        "Data" : "01/01/1995"
      },
      {
        "Name" : "Clara",
        "RU" : "0085207",
        "Curso" : "Matemática",
        "Data" : "06/07/1998"
      }
    ]
  }
}