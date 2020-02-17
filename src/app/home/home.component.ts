import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router:RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
    public onNavigate(){
        console.log("hola");
        this.router.navigate(['/page-one'])
    }

    public onItems(){
        console.log("hola");
        this.router.navigate(['/item'])
    }
}
