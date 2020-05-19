import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>

    input: string = ''; 

  constructor(private api: ApiService, private router: Router) { }

   ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data', data);
       });
    }
//Search from:
//https://ionicframework.com/docs/api/searchbar
//https://stackoverflow.com/questions/60269897/search-api-data-in-ionic-4
     search() {
         this.quotes = this.api.findQuote(this.input);
     }

//We basically create a search based upon the values inserted in the search bar, it is similar to the Quote Details: 
//Once the id is a variable valid that changed, we can pass the information to the API by rounting to api.service.ts
    openDetails(quote) {
        let qId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${qId}`);
    }

}
