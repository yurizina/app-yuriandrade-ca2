import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//We set the root direct using Router functionality
import { Observable } from 'rxjs';
//The observable will be able to receive multiple return values from HTTP requests 
import { ApiService } from '../../services/api.service';
//import this will allow to make request to API from page Services

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: Observable<any>;

    constructor(private router: Router, private api: ApiService) { }
    //What is a contructor? We use the constructor to storage services and classes 
    //We first used the Http request, but we defined a new pack of pages Services to host the url 
    //Once we define functions to call the right url request, we use the funtion here as ApiService 
  
    ngOnInit() {
        //Now we will make connection when the method is called in the view!
        //characters variable will be able to get data from API with function getCharacters
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my data: ', data);
        });
    }

    openDetails(character) {
        
        //these function was created in characters.page.html 
        //this will set the logic to call the function with correct router
       
        //We create a variable to transform request data from API to our code here:
        let charId = character.char_id; 

        this.router.navigateByUrl(`/tabs/characters/${charId}`);  
        //We could have one line of code like this one: 
        //this.router.navigateByUrl('/tabs/characters/${character.char_id}'); 
    }

}
