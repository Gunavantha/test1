import { Component, OnInit,Input } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-version-child',
  template: `<h3> Version {{major}}.{{minor}}</h3>
              <h4>change log:</h4>
              <ul>
                <li *ngFor="let change of changeLog">{{change}}</li>
               </ul>`,
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {

  constructor() { }

   @Input() major:number;
   @Input() minor:number;
   changeLog: string[]=[];

   ngOnChanges(changes:{[propKey:string]: SimpleChange}){
    
     let log:string[]=[];
     for(let propName in changes){
       let changedProp=changes[propName];
       let to = JSON.stringify(changedProp.currentValue);
       if(changedProp.isFirstChange()){
         log.push(`initial value of ${propName} set to ${to}`);
       }else{
            let from = JSON.stringify(changedProp.previousValue);
            log.push(`${propName} changed from ${from} to ${to}`);
       }
     }
     this.changeLog.push(log.join(','));
   }
  }


