import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeepNoteServiceService {
  apiUrl = 'http://localhost:3000/Note';

  constructor(private _httpClient: HttpClient) {}
  createNote(data: any): Observable<any> {
    return this._httpClient.post(this.apiUrl, data);
  }
  getAllNotes():Observable<any>{
    return this._httpClient.get(this.apiUrl);
  }
  noteDelete(noteID:any):Observable<any>{
    return this._httpClient.delete(`${this.apiUrl}/${noteID}`);
  }
  getNoteById(id:any):Observable<any>{
    return this._httpClient.get(`${this.apiUrl}/${id}`);
  }
  update(id:any,data:any):Observable<any>{
    return this._httpClient.put(`${this.apiUrl}/${id}`,data);
  }
}
