import {Component, OnInit} from '@angular/core';
// @ts-ignore
import Data from './schema.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public allLists;

  constructor(){}

  ngOnInit() {
    this.allLists =  Data;
  }
}
