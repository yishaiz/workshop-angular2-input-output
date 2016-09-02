import {Component} from '@angular/core';

@Component({
  selector: 'aah-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'

})

export class AppComponent {
  numberOfNotCompletedItems: number;

  displayNumberOfItemsLeft(numberOfItems) : void{
    this.numberOfNotCompletedItems = numberOfItems;
  }

  clearCompletedItems() : void{
    console.log('clear completed');


  }
}
