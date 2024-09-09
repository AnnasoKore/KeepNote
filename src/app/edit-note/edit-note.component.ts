import { Component, OnInit } from '@angular/core';
import { KeepNoteServiceService } from '../ownService/keep-note-service.service';
import { ActivatedRoute, Route } from '@angular/router';
import { KeepNoteComponent } from '../keep-note/keep-note.component';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  editNoteForm!:FormGroup;
  constructor(
    private _keepNoteService: KeepNoteServiceService,
    private _route: ActivatedRoute
  ) { 
    this.editNoteForm=new FormGroup({
      'title':new FormControl(),
      'note':new FormControl(),
      'id':new FormControl()
    })
   }

   ngOnInit(): void {
    let id=this._route.snapshot.params['id'];
    this._keepNoteService.getNoteById(id).subscribe( res => {
      console.log(res);
      this.editNoteForm.patchValue(
        {
          'title':res.title,
          'note':res.Note,
          'id':res.id
        }
      )
    });
    console.log(this.editNoteForm);
   }
   
   updateNote(){
    let noteData={
      id:this.editNoteForm.value.id,
      title:this.editNoteForm.value.title,
      Note:this.editNoteForm.value.note,
     }
    this._keepNoteService.update(noteData.id,noteData).subscribe(res=>{
     // alert(`"Update Success" : ${res.title} and ${res.Note}`);
    })
   }
}
