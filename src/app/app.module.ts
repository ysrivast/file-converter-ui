import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileModule } from './file/file.module';
import { RouterModule } from '@angular/router';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FileService } from './file/service/file.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileModule,
    AppRoutingModule,
    RouterModule,
    AngularFileUploaderModule,
    HttpClientModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
