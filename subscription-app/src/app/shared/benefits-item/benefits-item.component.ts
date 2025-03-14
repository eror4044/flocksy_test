import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefits-item',
  templateUrl: './benefits-item.component.html',
  styleUrls: ['./benefits-item.component.css']
})
export class BenefitsItemComponent {
  @Input() imageSrc: string = '';
  @Input() altText: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}
