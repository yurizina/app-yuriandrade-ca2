import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-death-details',
  templateUrl: './death-details.page.html',
  styleUrls: ['./death-details.page.scss'],
})
export class DeathDetailsPage implements OnInit {

    deathID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //Here the function use the path from constructor to GET paraments pased in ID.
        this.deathID = this.activatedRoute.snapshot.paramMap.get('id');
    }
}
