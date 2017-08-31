import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
