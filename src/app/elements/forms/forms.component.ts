import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent implements AfterViewInit {
  inputText: string = 'Texto inicial';
  textarea: string = 'Descrição inicial';
  select: string = '1';
  checkbox: boolean = false;
  radioButton: string = '1';
  @ViewChild('meuForm') form!: NgForm;
  ngAfterViewInit(): void {
    console.log(this.form);
  }
  onSubmit(meuForm: NgForm) {
    console.log('onSubmit', meuForm.value);
  }
  onReset(meuForm: NgForm) {
    console.log('onReset', meuForm.value);
    console.log(this.inputText);
    console.log(this.textarea);
    console.log(this.select);
    console.log(this.checkbox);
    console.log(this.radioButton);

    setTimeout(() => console.log(meuForm.value), 1000);
  }
}
