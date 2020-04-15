import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    //characterID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) { }

    ngOnInit() {
        //Old - Here the function use the path from constructor to GET paraments pased in ID.
        //Old - this.characterID = this.activatedRoute.snapshot.paramMap.get('id');
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.http.get('https://www.breakingbadapi.com/api/characters/${id}').subscribe( res => {
          this.character = res;
        })

    }

}
