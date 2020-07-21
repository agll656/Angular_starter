import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces';

// Ngmodule decorator makes this class appmodule class
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    // below is external module that is imported so that our app works well in the browser
    BrowserModule,
    FormsModule
  ],
  // bootstrap defines the startup component of our application
  // startup component should contain sekectir we used in the html file
  bootstrap: [AppComponent]
})
export class AppModule { }
