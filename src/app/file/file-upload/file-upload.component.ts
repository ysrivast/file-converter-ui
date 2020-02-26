import { Component, OnInit } from '@angular/core';
import { FileService } from '../service/file.service';
import * as fileSaver from 'file-saver'; // npm i --save file-saver

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  image: File;
  imageList: File[];
  selectedFile = null;
  fileId: string = null;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  onImageSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    alert(1)
    if (this.selectedFile != null) {
      console.log("file selected");
      this.fileService.uploadImage(this.selectedFile).subscribe(
        response => {
          console.log("response is : ", response)
         });
    }
  }

  downloadMe() {
    console.log("inside click fileId is : ", this.fileId);
    // if (this.fileId != null) {
      var file = 'd81fa386-6fe3-4961-adad-b7b5c50fdf62.pdf';
      alert(3);
      this.fileService.downloadImage(file).subscribe(
        data => {
          this.saveFile(data, "abc.pdf")
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveFile(data: any, filename?: string) {
    console.log("inside savefile : ", this.fileId);
    const blob = new Blob([data], {type: 'text/pdf; charset=utf-8'});
    fileSaver.saveAs(blob, filename);
  }

}
