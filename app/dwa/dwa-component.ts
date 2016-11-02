import { Component, OnInit } from '@angular/core';
import { DwaService } from './dwa.service';

@Component({
  moduleId: module.id,
  selector: 'dwa',
  templateUrl: './dwa.component.html'
})
export class DwaComponent implements OnInit {
  constructor(
    private dwaService: DwaService
  ){ }

  ngOnInit() { }

  getData() {
    
  }
}
