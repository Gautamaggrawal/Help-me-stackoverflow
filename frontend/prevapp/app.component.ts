import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  query:string;

  constructor(public router: Router) {

  }

  ngOnInit() {
  }

  search(){
  	this.router.navigateByUrl('?query='+this.query);
  }

}




