import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() isClickable: boolean = true;
  @Output() theButtonWasClicked = new EventEmitter();
  items: IProduct[] = [
    {
      id: 0,
      img: 'assets/limitless-woman-max.png',
      name: 'Limitless Woman Max',
      capsules: 30,
      price: 150,
      tagOffer: 20
    },
    {
      id: 1,
      img: 'assets/limitless1.jpg',
      name: 'Limitless Max',
      capsules: 30,
      price: 150
    },
    {
      id: 2,
      img: 'assets/limitless2.png',
      name: 'Limitless Tumeric',
      capsules: 30,
      price: 150
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleClickedButton() {
    this.theButtonWasClicked.emit();
  }
}
