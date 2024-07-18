import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-group',
  templateUrl: './forms-group.component.html',
  styleUrl: './forms-group.component.scss',
})
export class FormsGroupComponent {
  onSubmit(meuForm: NgForm) {
    console.log(meuForm.value);
  }
}
