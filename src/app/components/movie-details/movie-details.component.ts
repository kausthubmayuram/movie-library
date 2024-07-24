import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {

  movieDetails:any;
  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.getMovieById(id);
  });

  }

  ngOnInit(): void {

  }

  getMovieById(id:any){
    this.dataService.getbyId(id).subscribe((result:any)=>{
      this.movieDetails = result;
    });
  }

  goBack() {
    this.router.navigate(['/manage']);
  }
  
}
