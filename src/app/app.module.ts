import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  import{ImageFilterPipe} from './image/shared/filter.pipe'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageService } from './image/shared/imageService';








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
