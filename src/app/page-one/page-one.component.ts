import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css'],
  moduleId: module.id,
})
export class PageOneComponent implements OnInit {

  constructor(private router:RouterExtensions) { }

  ngOnInit() {
  }

  public onBack(){
    console.log('page one');
    this.router.back();
  }

}
