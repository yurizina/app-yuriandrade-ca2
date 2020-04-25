import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//Import service to get requests to get Service! 
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    allQuotes: Array<any>;
    constructor(private http: HttpClient) { }
    //This allow to check for the import functionality 

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
             this.allQuotes = data as Array<any>;
         });
        //Same as getEpisodes but for Quotes
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }

       getQuoteSearch(author: string) {
         let selectedQuotes: any[] = [];
         for (let quote of this.allQuotes) {
             
               if (quote.author.toLowerCase().includes(author.toLowerCase())) {
                 selectedQuotes.push(quote);
             }
         }
          return of(selectedQuotes);
     }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`)
    }
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count`)
    }


}
