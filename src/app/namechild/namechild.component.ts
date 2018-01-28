import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-namechild',
  template: '<h3>"{{name}}"</h3>',
  styleUrls: ['./namechild.component.css']
})
export class NamechildComponent implements OnInit {

  constructor() { }

ngOnInit() {
  }

  private _name=''; 

  @Input()
  set name(name:string){
       this._name=(name && name.trim()) ||'<no name set>';
  }
  
   get name():string{return this._name;}
}
