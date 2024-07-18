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

@NgModule({
  declarations: [AppComponent, InputTextComponent, TextareaComponent, SelectComponent, RadioComponent, CheckboxComponent, FormsComponent, FormsGroupComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
