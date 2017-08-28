import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public setStyle

  constructor(private store:Store<any>) {
  	store.select('setStyle')
  		.subscribe(setStyle => {this.setStyle = setStyle;})
   }

  ngOnInit() {
  }

}
