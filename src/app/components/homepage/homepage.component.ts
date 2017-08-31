import { Component, OnInit } from '@angular/core';
import { toggleStyle } from '../../reducers/style.reducer';
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
          this.nineties ? body.classList.add("nineties") : body.classList.remove("nineties");
      })
   }

  toggleCSS(theme) {
    this.store.dispatch({
      type: "TOGGLE_STYLE",
      payload: theme
    })
  }

  getNinetiesClass(){
        const isValid=this.nineties;
        return {nineties:isValid};
    }


  button = 'Toggle Me';
  title = 'Lorem Ipsum Dolor'

  ngOnInit() {
  }

}
