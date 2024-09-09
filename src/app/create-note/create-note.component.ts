import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeepNoteServiceService } from '../ownService/keep-note-service.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  constructor(private _keepNoteService:KeepNoteServiceService ) { 
    
  }
  
  ngOnInit(): void {
  }
  
  saveNote(form:NgForm){
    console.log(form);
    console.log(form.value);    
    let keepNote={
      title:form.value.title,
      Note:form.value.notes
    }
    this._keepNoteService.createNote(keepNote).subscribe(res=>{
      console.log(res);
      alert('Successfully Create')
    })
    form.reset();

  }
}
