import { Component, OnInit } from '@angular/core';
import { setStyle } from '../reducers/style.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
	button = 'The 90s';

	showNinetiesStyle = false;
	//call action here and pass on showNinetiesStyle 
	toggleCSS() {
		return (this.showNinetiesStyle ? 'yellow' : 'red');
		// this.store.dispatch({type: "TOGGLE_STYLE", payload: this.showNinetiesStyle})
	}


  constructor(private store:Store<any>) {   	
  	// this.showNinetiesStyle = store.select('showNinetiesStyle')
  }

  ngOnInit() {
  }

}
