import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent implements OnInit {

  constructor() { }

  products = [
    {
      name : 'Fruits de mer',
      price :500
    } ,
    {
      name : 'Pomme' ,
      price : 850
    } ,
    {
      name : 'Mangue',
      price : 400
    } ,
    {
      name : 'Ananas',
      price : 280
    }
  ]


  ngOnInit(): void {
  }

}
