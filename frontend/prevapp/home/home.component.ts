import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendApiService} from '../services/backend-api.service';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import { quesCard } from './entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  quesList : quesCard;
  headerString : string;
  environ:any;
  bind: boolean;
  finished:boolean;
  queryData:string;
  resultFound:boolean;

  constructor(public userques: BackendApiService, public activeRouter: ActivatedRoute,public router: Router) {
    this.headerString="Trending";
    this.environ=environment;
    this.quesList=new quesCard();
    this.bind=false;
    this.finished=false;
    this.resultFound=false;
  }

  ngOnInit() {
  	console.log("hey");
  	this.activeRouter.queryParams.subscribe((route: any) => {
      this.queryData = route.query;
      if(!(this.queryData===null || this.queryData=="" || this.queryData===undefined))
      {
        this.resultFound=false;
        this.showQueryData(this.queryData);
      }
      else{
      	console.log("ispeee")
        this.resultFound=false;
        this.bind=true;
        this.userques.getallquestions(1)
        .subscribe((data:any) => {
          this.quesList=data;
        });
      }
    });
  }
  public setData(data)
  {
    this.quesList.results=this.quesList.results.concat((data.results))
    this.quesList.page=data.page;
    this.quesList.total_pages=data.total_pages;
    this.bind=false;
  }

  public onScrollDown(): void {
    if (this.quesList.page==this.quesList.total_pages)
      this.finished=true;
    else
    {
      this.activeRouter.queryParams.subscribe((route: any) => {
      this.queryData = route.query;
      if(!(this.queryData===null || this.queryData=="" || this.queryData===undefined))
      {
        this.bind=true;
        this.userques.getQueryquestion(this.quesList.page+1,this.queryData)
          .subscribe((data:any) => {
             this.setData(data);
        });
      }
      else
      {
        this.bind=true;
        this.userques.getallquestions(this.quesList.page+1)
        .subscribe((data:any) => {
            this.setData(data);
        });
      }
      });
    }
}

  ngOnDestroy() {

  }

  openDetails(id,detail) {
    this.router.navigateByUrl('/details/'+id);
    localStorage.setItem(id,JSON.stringify(detail));
  }

  public showQueryData(query){
    this.headerString=query;
    this.finished=false;
    this.bind=true;
    this.userques.getQueryquestion(1,query)
      .subscribe((data:any) => {
        if(data.results.length==0){
          this.resultFound=true;
        }
        this.quesList=data;
        this.bind=false;
    });
  }



}


