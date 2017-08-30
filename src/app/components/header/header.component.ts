import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StyleService } from '../../services/style.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','./header.component.nineties.css']
})

export class HeaderComponent implements OnInit {
 
  public nineties

  constructor(private store:Store<any>, private styleService:StyleService ) {
    store.select('toggleStyle')
      .subscribe(toggleStyle => {
        this.nineties = toggleStyle;
      })
   }

  ngOnInit() {
    console.log()
  }

  getNinetiesClass(){
        const isValid=this.nineties;
        return {nineties:isValid};
    }



}
