import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
 
    episodeID = null;
    //First of all we set the character ID, then we can use the constructor 

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //Here the function use the path from constructor to GET paraments pased in ID.
        this.episodeID = this.activatedRoute.snapshot.paramMap.get('id');
    }

}
