import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AlertsService } from 'src/app/shared/utils/alerts.service';
@Component({
  selector: 'app-edit-single',
  templateUrl: './edit-single.component.html',
  styleUrls: ['./edit-single.component.css'],
})
export class EditSingleComponent implements OnInit {
  movieForm!: FormGroup;
  submitted: boolean = false;
  
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private alertService: AlertsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.movieForm = this.fb.group({
        movieName: ['', Validators.required],
        description: ['', Validators.required],
        releaseDate: ['', Validators.required],
        rating: ['', Validators.required],
        director: ['', Validators.required],
        poster: ['', Validators.required],
        language: ['', Validators.required],
        id: ['', Validators.required],
      });
      this.getMovieById(id);
  });
  }

  ngOnInit(): void {
    
  }

  updateMovie() {
    if (this.movieForm.invalid) {
      return;
    }
    let payload = {
      name: this.movieForm.value.movieName,
      description: this.movieForm.value.description,
      poster: this.movieForm.value.poster,
      language: this.movieForm.value.language,
      releaseDate: this.movieForm.value.releaseDate,
      director: this.movieForm.value.director,
      rating: this.movieForm.value.rating,
      cast: [],
    };
    console.log(payload);
    
    this.dataService
      .editMovie(this.movieForm.value.id, payload)
      .subscribe((data) => {
        this.alertService.showSuccess('Movie Updated Successfully', 'Success');
        this.router.navigate(['/manage']);
      });
  }

  getMovieById(id: any) {  
    this.dataService.getbyId(id).subscribe((data: any) => {
      let temp = new Date(data.releaseDate);
      let split  = temp.toISOString().split('T')[0];
      this.movieForm.patchValue({
        movieName: data.name,
        description: data.description,
        releaseDate: split,
        rating: data.rating,
        director: data.director,
        poster: data.poster,
        language: data.language,
        id: data.id,
      });
    });
  }

  goBack() {
    this.router.navigate(['/manage']);
  }
}
