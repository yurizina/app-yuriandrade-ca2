import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// After set up view and main path, we have to set up the rooting for the tabs!  
import { TabsPage } from './tabs.page';

//Code based upon Mikhail Timoteef, lecturer from CCT, module Mobile Development
const routes: Routes = [
  {
   path: 'tabs',
    component: TabsPage,
    children: [
        {
        path: 'logo',
        children: [
          {
            path: '',
            loadChildren: () => import('../logo/logo.module').then( m => m.LogoPageModule)
          },
        ]
      },
      {
        path: 'characters',
        //this will be written as tabs/characters
        children: [
          {
            path: '',
            //the first empty path for the characters will go to characters.module, this responsible for rooting the files for my app 
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          },
          {
            path: ':id',
            //we set a variable ID to look for the content we would like
            loadChildren: () => import('../character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
          }
        ]
      },
      {
        path: 'episodes',
        children: [
          {
            path: '',
            loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
          }, 
           {
            path: ':id',
            loadChildren: () => import('../episode-details/episode-details.module').then( m => m.EpisodeDetailsPageModule)
          }
        ]
      },
      {
        path: 'deaths',
        children: [
          {
            path: '',
            loadChildren: () => import('../deaths/deaths.module').then( m => m.DeathsPageModule)
          }
        ]
      },
      {
        path: 'quotes',
        children: [
          {
            path: '',
            loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../quote-details/quote-details.module').then( m => m.QuoteDetailsPageModule)
          }
        ]
      },
      {
        path: 'camera',
        children: [
          {
            path: '',
            loadChildren: () => import('../camera/camera.module').then( m => m.CameraPageModule)
          }
        ]
      }
    ]
  },
  //First page open will be logo, because the empty path redirects to the page selected
  {
    path: '',
    redirectTo: '/tabs/logo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
