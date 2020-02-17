import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import * as Toast from 'nativescript-toast';
import { ItemsService } from './items.service';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  moduleId: module.id,
  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {

  items: any = [];

  constructor(private router:RouterExtensions, private itemsService:ItemsService) { }

  ngOnInit(){
        this.extractData();
  }

  extractData(){
    this.itemsService.getItems()
        .subscribe((response) => {
            console.dir(response);
            this.items = response;
          },(error) => {
            console.log(error);
          });
  }

  public onBackHome(){
        this.router.navigate(['/home']);
  }

  public onShowMessage(){
    Toast.makeText("hola este es un mensaje").show();
  }

}
