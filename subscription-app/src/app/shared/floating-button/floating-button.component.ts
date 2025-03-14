import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent {

  @Input() iconSrc: string = '';

  @Input() altText: string = 'Floating button';
  onClickButton(): void {
    console.log('Floating button clicked!');
  }
}
