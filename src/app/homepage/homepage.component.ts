import { Component, OnInit } from '@angular/core';
import { toggleStyle } from '../reducers/style.reducer';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
 
  public nineties

  constructor(private store:Store<any>) {
    store.select('toggleStyle')
      .subscribe(toggleStyle => {
        this.nineties = toggleStyle;
          let body = document.getElementsByTagName('body')[0];
            
          if(this.nineties) {
            console.log(this.nineties)
            body.classList.add("nineties");   //add the class
          } else {
              console.log(this.nineties)
            body.classList.remove("nineties"); 
          }
      
      })
     
   }

  toggleCSS(showNinetiesStyle) {
    this.store.dispatch({
      type: "TOGGLE_STYLE", 
      payload: showNinetiesStyle
    })
  }


  button = 'The 90s';


  ngOnInit() {
  }

}
