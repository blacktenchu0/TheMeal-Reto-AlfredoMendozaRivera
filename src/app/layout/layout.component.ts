import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  options: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }
}
