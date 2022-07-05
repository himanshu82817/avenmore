import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-of-directors',
  templateUrl: './board-of-directors.component.html',
  styleUrls: ['./board-of-directors.component.css']
})
export class BoardOfDirectorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bodCards =[
    {
      name:'Ajay Kumar',
      about:'Non-Executive & Independent Director'
    },
    {
      name:'Ashok Kumar Gupta',
      about:'Managing Director'
    },
    {
      name:'Shyam Sunder Lal Gupta',
      about:'Non-Executive & Independent Director'
    },
    {
      name:'Govind Prasad Agrawal',
      about:'Non-Executive Chairman'
    },
    {
      name:'Bhupinder Singh',
      about:'Non-Executive & Independent Director'
    },
    {
      name:'Ashu Gupta',
      about:'Non-Executive Director'
    },
  ]
}
