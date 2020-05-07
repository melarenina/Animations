import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // -----------------------------------------SIMPLE TRIGGER-----------------------------------------
    trigger('divState', [

      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),

      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),

      // "=>" From normal to highlited and the other way arround
      // Number of miliseconds it should take to animate
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))

    ]),
    // -----------------------------------------SIMPLE TRIGGER-----------------------------------------

    // -----------------------------------------WILD TRIGGER-----------------------------------------
    trigger('wildState', [

      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),

      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),

      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0px) scale(0.5)'
      })),

      transition('highlighted => normal', animate(800)),
      transition('normal => highlighted', animate(300)),
      transition('shrunken <=> *', // No matter in which state it is, this animation will happen
        [
          style({
            backgroundColor: 'orange'
          }),
          animate(1000, style({
            borderRadius: '50px'
          })),
          animate(500) // This will be executed after the border radius
        ]
      ),

      // "=>" From normal to highlited and the other way arround
      // Number of miliseconds it should take to animate
      // transition('normal <=> highlighted', animate(300)),

    ]),
    // -----------------------------------------WILD TRIGGER-----------------------------------------

    // -----------------------------------------SIMPLE TRIGGER-----------------------------------------
    trigger('list1', [

      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),

      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300),
      ]),

      transition('* => void', [
        animate(300, style({ // The style after the animate is the final state
          transform: 'translateX(+100px)',
          opacity: 0
        })),
      ])
    ]),
    // -----------------------------------------SIMPLE TRIGGER-----------------------------------------
  ]
})
export class AppComponent {

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

    onAnimate(){

      this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
      this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';

    }

    onShrink(){
      this.wildState = 'shrunken';
    }
}
