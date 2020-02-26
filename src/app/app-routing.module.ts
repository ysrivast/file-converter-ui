import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file/file-upload/file-upload.component';

const routes : Routes = [
    {
      path : '', component : FileUploadComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    
  ]
})
export class AppRoutingModule { }
