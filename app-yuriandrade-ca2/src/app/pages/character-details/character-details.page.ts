import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    characterID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //Here the function use the path from constructor to GET paraments pased in ID.
        this.characterID = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
