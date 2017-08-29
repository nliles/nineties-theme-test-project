import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public nineties

  constructor(private store:Store<any>) {
    store.select('toggleStyle')
      .subscribe(toggleStyle => {
        this.nineties = toggleStyle;
      })
   }

  getNinetiesClass(){
        const isValid=this.nineties;
        return {nineties:isValid};
    }


  ngOnInit() {
  }

}
