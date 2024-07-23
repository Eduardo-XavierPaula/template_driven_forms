import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { TextareaComponent } from './elements/textarea/textarea.component';
import { SelectComponent } from './elements/select/select.component';
import { RadioComponent } from './elements/radio/radio.component';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormsComponent } from './elements/forms/forms.component';
import { FormsGroupComponent } from './elements/forms-group/forms-group.component';
import { FormUserComponent } from './elements/forms-with-children/form-user/form-user.component';
import { FormProfessionComponent } from './elements/forms-with-children/form-profession/form-profession.component';
import { MainFormComponent } from './elements/forms-with-children/main-form/main-form.component';
import { CustomValidatorFormEx1Component } from './custom-validators/synchronous/ex1/custom-validator-form-ex1/custom-validator-form-ex1.component';
import { InvalidTextValidatorDirective } from './custom-validators/synchronous/ex1/directives/invalid-text-validator.directive';

@NgModule({
  declarations: [AppComponent, InputTextComponent, TextareaComponent, SelectComponent, RadioComponent, CheckboxComponent, FormsComponent, FormsGroupComponent, FormUserComponent, FormProfessionComponent, MainFormComponent, CustomValidatorFormEx1Component, InvalidTextValidatorDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
