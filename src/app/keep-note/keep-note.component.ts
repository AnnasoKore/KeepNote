import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeepNoteServiceService } from '../ownService/keep-note-service.service';

@Component({
  selector: 'app-keep-note',
  templateUrl: './keep-note.component.html',
  styleUrls: ['./keep-note.component.css']
})
export class KeepNoteComponent implements OnInit {
  noteData: any;
  titleSearch: string = "";
  updateNote: any;
  constructor(private _keepNoteService: KeepNoteServiceService) {
    this.getNote();
  }

  ngOnInit(): void {
    this.getNote();
  }
  getNote() {
    this._keepNoteService.getAllNotes().subscribe(res => {
      this.noteData = res;
    })
  }
  deleteNote(idNote: any) {
    this._keepNoteService.noteDelete(idNote).subscribe(res => {
      // console.log('note deleted : ',res);
      this.getNote();
    })
  }
  
}
