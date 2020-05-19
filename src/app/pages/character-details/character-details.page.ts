import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavourite = false;
    charId = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        //This is our main fuinction to this page, there is no need to a new one as the Character page 

        this.charId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.charId).subscribe(res => {
            this.character = res[0];
            //Api returns an array which is processed here to show the right character. 
            console.log(JSON.stringify(this.character.char_id));
        });

        //We create a function to check if this charcter is favorite or not
        //We also create two functions to beahve if characther is fav or not

        this.favouriteService.isFavourite(this.charId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    favouriteChar() {
        //this method use s function created in the favourite.serive.ts, return a boolean flag if the character is favourite 
        this.favouriteService.favouriteChar(this.charId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteChar() {
        this.favouriteService.unfavouriteChar(this.charId).then(() => {
            this.isFavourite = false;
        });
    }

}
