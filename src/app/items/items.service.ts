import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable(//{
    //providedIn: "root"
//}
)
export class ItemsService{
        private serverUrl = "https://jsonplaceholder.typicode.com/todos";
        constructor(private http:HttpClient){}    

        getItems(){
          return this.http.get(this.serverUrl);
        }

        
}