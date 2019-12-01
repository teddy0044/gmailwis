import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  isShow = true;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  showTab = 1;
  tabToggle(index){
    this.showTab =index;
  }

  constructor() { }

  ngOnInit() {
  }

}
