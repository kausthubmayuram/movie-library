import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AlertsService } from 'src/app/shared/utils/alerts.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  moviesList:any = [];
  constructor(
    private dataService:DataService,
    private router:Router,
    private alertService:AlertsService
  ) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(){
    this.dataService.getAllMovies().subscribe((res:any)=>{
      this.moviesList = res ? res : [];
    });
  }

  deleteMovie(movie:any){
    this.dataService.deleteMovie(movie.id).subscribe((res:any)=>{
      this.alertService.showSuccess('Movie deleted successfully', 'Success');
      this.getAllMovies();
    });
  }

  editMovie(movie:any){
    this.router.navigate(['/edit', movie.id]);
  }
}
