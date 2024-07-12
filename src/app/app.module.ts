import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './elements/input-text/input-text.component';
import { TextareaComponent } from './elements/textarea/textarea.component';

@NgModule({
  declarations: [AppComponent, InputTextComponent, TextareaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
