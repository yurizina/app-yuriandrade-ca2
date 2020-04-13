import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
// We had to import the NavController and Router
//NavController helps to navigate inside the app, commmonly used 
//Or we set the root direct using Router
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }
//What is a contructor? We use the constructor to storage services and classes 
//Once storaged,can be used using .this ammend. 
//This function created shows 2 paths to navigate 
  ngOnInit() {
  }

  openDetails(){
      //these function was created in characters.page.html 
      //this will set the logic to call the function with correct router
      //We see .this beeing used in this method to use the function from constructor
      this.router.navigateByUrl('/tabs/characters/1');
  }
  //We are not using NavController, yet! 

}
