import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-governance',
  templateUrl: './corporate-governance.component.html',
  styleUrls: ['./corporate-governance.component.css']
})
export class CorporateGovernanceComponent implements OnInit {

  constructor() { }
  panelOpenState = false
  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'columnA', 'columnB', 'columnC', 'columnD', 'columnE', 'columnF'];
  dataSource = [
    { position: 1, name: 'Mr. Govind Prasad Agrawal',
      columnA: 'Member', columnB: 'Chairman', columnC:'Member',columnD:'Member', columnE:'Member', columnF:'Member'},
    { position: 2, name: 'Mr. Ajay Kumar',
      columnA: 'Chairman', columnB: '', columnC:'Chairman',columnD:'', columnE:'Member', columnF:'Chairman'},
    { position: 3, name: 'Mr. Shyam Sunder Lal Gupta',
      columnA: 'Member', columnB: 'Member', columnC:'Member',columnD:'Member', columnE:'', columnF:''},
    { position: 4, name: 'Mr. Ashok Kumar Gupta',
      columnA: '', columnB: 'Member', columnC:'',columnD:'Chairman', columnE:'Chairman', columnF:'Member'},
    { position: 5, name: 'Mrs. Ashu Gupta',
      columnA: '', columnB: '', columnC:'',columnD:'', columnE:'', columnF:''},
    { position: 6, name: 'Mr. Bhupinder Singh',
      columnA: '', columnB: '', columnC:'',columnD:'', columnE:'', columnF:''},
  ]

}
