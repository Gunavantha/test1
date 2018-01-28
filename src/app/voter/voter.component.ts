import { Component, OnInit,Input ,EventEmitter,Output } from '@angular/core';
//import { Output } from '@angular/core/src/metadata/directives';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name:string;
  @Output() onVoted = new EventEmitter<boolean>();
  voted =false;
vote(agreed:boolean){
  console.log("vote clicked")
  debugger;
  this.onVoted.emit(agreed);
  this.voted=true;
}
}
