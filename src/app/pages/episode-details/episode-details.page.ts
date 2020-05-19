import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
 
    episode: any;
    //Similar to Character details page.ts 
    epId = null; 
    //First of all we set the character ID, then we can use the constructor
    isFavourite = false;  

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        //Here the function use the path from constructor to GET paraments pased in ID.
        this.epId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getEpisode(this.epId).subscribe(res => {
             this.episode = res[0];
             console.log(JSON.stringify(this.episode.episode_id));

        });

        this.favouriteService.isFav(this.epId).then(isFav => {
            this.isFavourite = isFav;
        });

    }
    favouriteEp() {
        //this method use s function created in the favourite.serive.ts, return a boolean flag if the character is favourite 
        this.favouriteService.favouriteEp(this.epId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteEp() {
        this.favouriteService.unfavouriteEp(this.epId).then(() => {
            this.isFavourite = false;
        });
    }

}
