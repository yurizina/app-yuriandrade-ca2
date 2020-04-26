import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//Import service to get requests to get Service! 
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
//Most code retrieved from Mikhail Timoteef, lecturer from CCT, module mobile development 
export class ApiService {

    //Search based upon: 
    //https://youtu.be/Nc1RqvDY-B8
    //https://devdactic.com/ionic-4-pokedex-search-scroll/


    allQ: Array<any>;
    constructor(private http: HttpClient) { }
    //This allow to check for the import functionality 

    //I have used material from Mikhail Timoteev class as lecturer from CCT, module Mobile Development
    getEpisodes() {
        //We define functions to call the method in the Episode logic page
        return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
    }

    getEpisode(id) {
        //This function will select the epsiode desired! 
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`)
    }
    getCharacters(offset) {
        //We define functions to call the method in the Characters logic page
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${offset}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    }

    getQuotes() {
       
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
             this.allQ = data as Array<any>;
         });
        //Same as getEpisodes but for Quotes
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }
    //Also, the Quote search that I have based upon is from public source code from Fernando Fernandez 
    //https://github.com/fernandocjrr/mobdev-ca2/commit/0021ae166270b4c744d2d978586c5d6d55f3a688
       findQuote(inputUser: string) {
           //We have to define method to pass value inserted to the request
          
         let selectedQ: any[] = [];
         for (let quote of this.allQ) {
            //We check the API by author parameter and compare with input from User
               if (quote.author.toLowerCase().includes(inputUser.toLowerCase())) {
                //If the author is found, we push the quote from him/her 
                selectedQ.push(quote);
             }
         }
         //Return the item found in the array of quotes
          return of(selectedQ);
     }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count`)
    }

    getDeath(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`)
    }


}
