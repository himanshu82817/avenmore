import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  panelOpenState = false
  constructor() { }

  ngOnInit(): void {
  }

}
