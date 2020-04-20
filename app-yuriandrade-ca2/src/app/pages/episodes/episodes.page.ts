import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})

export class EpisodesPage implements OnInit {

    episodes: Observable<any>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
      //Call the function from Api Services 
      this.episodes = this.api.getEpisodes();
      //Get the data from the funciton getEpisodes
      this.episodes.subscribe(data => {
            console.log('my data: ', data);
            //'my data: ' or 'my data' ? 
        });

  }

  openDetails(episode){
      //We come with this line after we check the API and see that episode is presented there 
      let epId = episode.episode_id;
      //After we check the episode, we route to the characters details pages! 
      this.router.navigateByUrl(`/tabs/episodes/${epId}`);  
  }

}
