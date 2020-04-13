import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {

    quoteID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //Here the function use the path from constructor to GET paraments pased in ID.
        this.quoteID = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
