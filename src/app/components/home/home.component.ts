import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any = [];
  constructor(private dataService:DataService, private router: Router) { }


  ngOnInit(): void {
    this.dataService.getAllMovies().subscribe((data:any)=>{
      this.movies = data;
    });
  }

  openMovieDetails(id:any){
    this.router.navigate(['details', id]);
  }
}
