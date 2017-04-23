import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dimensionsPattern = "^[0-9] [0-9]$";
    
  constructor() { 
    
  }

  ngOnInit() {
  }


}
