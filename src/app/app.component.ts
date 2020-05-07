import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [

      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),

      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),

      // "=>" From normal to highlited    Number of miliseconds it should take to animate
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))

    ])
  ]
})
export class AppComponent {

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

    onAnimate(){

      if (this.state === 'normal'){
        this.state = 'highlighted';
      }else{
        this.state = 'normal';
      }
    }

    onShrink(){

    }
}
