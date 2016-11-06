import { Component, OnInit } from '@angular/core';
import { DwaService } from './dwa.service';

@Component({
  moduleId: module.id,
  selector: 'dwa',
  templateUrl: './dwa.component.html',
  providers: [ DwaService ]
})
export class DwaComponent implements OnInit {
  private property: any;

  constructor(
    private dwaService: DwaService
  ){ }

  ngOnInit() { }

  processData(jsonData) {
    console.log('jsonData', jsonData);
  }

  getData() {
    let dataResult = this.dwaService.getData();
    dataResult
      .subscribe(
        arg => this.processData(arg.json())
      );

  }
}
