import { Component, Input, OnInit } from '@angular/core';
import { Iperson } from 'src/types/person';
import { CrudHttpService } from '../crud-http.service';

@Component({
  selector: 'app-view-all-persons',
  templateUrl: './view-all-persons.component.html',
  styleUrls: ['./view-all-persons.component.scss']
})
export class ViewAllPersonsComponent implements OnInit {
  @Input() allPersonData !:Array<Iperson>

  constructor(private _crudservice:CrudHttpService) { }

  ngOnInit(): void {
  }

//delete fun 
  onDelete(id:number){
    this._crudservice.delete(id)
    .subscribe(
      (res=>{
        alert("data deleteled successfully");
        console.log(res)}),
      (err => {console.log( `Somthing went wrong`)})
  )}

  
}
