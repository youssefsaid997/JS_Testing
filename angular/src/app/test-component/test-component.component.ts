import { Component , OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(public testService : TestService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
  add(x:number,y:number):number{
    return x+y;
  }

}
