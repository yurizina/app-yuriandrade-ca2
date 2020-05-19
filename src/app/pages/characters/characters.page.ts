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
    chars = [];
    //Array of characters, will allow to create several pages to infinite scroll 
    offset = 0;
    //Define the very first page of the pack of pages
    maxChars = 64;
    //Number maximum of characters + 1, defining the end of infinite scroll 

    constructor(private router: Router, private api: ApiService) { }
    //What is a contructor? We use the constructor to storage services and classes 
    //We first used the Http request, but we defined a new pack of pages Services to host the url 
    //Once we define functions to call the right url request, we use the funtion here as ApiService 

    ngOnInit() {

        this.loadCharacters();
    }

    loadCharacters(event?) {

        //Now we will make connection when the method is called in the view!
        //Will be able to get data from API with function getCharacters and show the first 20 characters defined in the url as limit
        this.api.getCharacters(this.offset).subscribe(data => {

            //this console shows the information in the console of the browser
            //easy the track of data retrieved from API
            console.log("my chararters info:", data);

            //we need to concacnate the information retrieved in many arrays
            //Once the array created we can load a new page with the following array
            this.chars = this.chars.concat(data);

            //We will finish every the event of loading a page
            //This allow to load the next page until it reaches the number max of pages
            if (event) {
                event.target.complete();
            }
        })
    }

    loadMore(event?) {
        //We have to create a function to load more pages
        //console.log(event);
        //This offset++ will increase the number of pages every we need the function
        this.offset = this.offset + 20;
        //What to do with the loadMore function? Call the main function which have the data
        this.loadCharacters(event);

        //Once the number of pages have reached, the loadMore function stops
        if (this.offset > this.maxChars) {
            event.target.disabled = true;
        }
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
