import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: Observable<any>

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
      this.episodes = this.api.getEpisodes();
  }

  openDetails(episode){
      //We come with this line after we check the API and see that episode is presented there 
      let episodeId = episode.episode_id;
      //this.router.navigateByUrl('/tabs/episodes/${episodeId}');
      this.router.navigateByUrl('/tabs/characters/${episode_id}');  
  }

}
