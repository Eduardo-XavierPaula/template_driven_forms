import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    console.log('Input Original', this.inputEl);
    console.log('Input Form control', this.inputElFormControl);
  }

  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      console.log('Enviado com sucesso!');
    }
  }
}
