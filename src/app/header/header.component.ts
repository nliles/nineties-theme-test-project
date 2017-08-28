import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public setStyle

  constructor(private store:Store<any>) {
  	store.select('setStyle')
  		.subscribe(setStyle => {this.setStyle = setStyle;})
   }

  ngOnInit() {
  }

}
