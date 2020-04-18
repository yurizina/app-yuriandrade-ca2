import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
 
    quote: any; 
    quoteID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute, private api:ApiService) { }

    ngOnInit() {

        //Here the function use the path from constructor to GET paraments pased in ID.
        this.quoteID = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.quoteID).subscribe(res => {
            this.quote = res[0];
            //New line of code here as well, to retrieve the correct data! 
            console.log(JSON.stringify(res[0]));
        });
    }

}
