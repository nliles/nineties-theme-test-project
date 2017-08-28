import { Component, OnInit } from '@angular/core';
import { toggleStyle } from '../reducers/style.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
  button = 'The 90s';

  constructor(private store:Store<any>) {     
    // this.showNinetiesStyle = store.select('showNinetiesStyle')
  }

  //call action here and pass on showNinetiesStyle 

  toggleCSS(showNinetiesStyle) {
    console.log(showNinetiesStyle)
    this.store.dispatch({type: "TOGGLE_STYLE", payload: showNinetiesStyle})
  }



  ngOnInit() {
  }

}
