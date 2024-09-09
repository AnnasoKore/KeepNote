import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './create-note/create-note.component';
import { KeepNoteComponent } from './keep-note/keep-note.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {path:'',redirectTo:'note',pathMatch:'full'},
  {path:'addNote', component:CreateNoteComponent},
  {path:'note', component:KeepNoteComponent},
  {path:'edit/:id', component:EditNoteComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
