import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  UPLOAD_URL = "http://localhost:8080/converter/upload-file/";
  DOWNLOAD_URL = "http://localhost:8080/converter/download-file/";

  constructor(private http: HttpClient) { }

  uploadImage(file: any) {
    const payload = new FormData();
    payload.append('file', file);
    return this.http.post(this.UPLOAD_URL, payload, { responseType: 'text'}).pipe(map(data => data));
  }

  downloadImage(fileId: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/pdf; charset=utf-8');
    return this.http.post(this.DOWNLOAD_URL, fileId, { responseType: 'blob'}).pipe(map(data => data));
  }
}
