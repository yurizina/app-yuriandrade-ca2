import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// We had to import the NavController and Router
//NavController helps to navigate inside the app, commmonly used 
//Or we set the root direct using Router
import { Observable } from 'rxjs';
//The observable will be able to receive multiple return values from HTTP requests 
import { HttpClient } from '@angular/common/http';
//import this will allow to make request to HTTP! 
@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: Observable<any>;

    constructor(private navController: NavController, private router: Router, private http: HttpClient) { }
    //What is a contructor? We use the constructor to storage services and classes 
    //Once storaged,can be used using .this ammend. 
    //This function created shows 2 paths to navigate 

    ngOnInit() {
        //Now we will make connection when the method is called in the view!
        //characters variable will be able to get data from API with GET protocols

        this.characters = this.http.get('https://www.breakingbadapi.com/api/characters');
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        })
    }

    openDetails(character) {
        
        //these function was created in characters.page.html 
        //this will set the logic to call the function with correct router
        //We see .this beeing used in this method to use the function from constructor
        //this.router.navigateByUrl('/tabs/characters/${character}');
        //If we set an ID, we can have the following code
        //let characterID = character.url.split('/');
       // let characterID = split[split.length-2]; 
        this.router.navigateByUrl(`/tabs/characters/${character}`);  
    }
    //We are not using NavController, yet! 

}
