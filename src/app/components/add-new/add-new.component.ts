import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { AlertsService } from 'src/app/shared/utils/alerts.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  
  movieForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder, 
    private dataService : DataService,
    private router:Router,
    private alertService:AlertsService
    ) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      movieName: ['',Validators.required],
      description: ['',Validators.required],
      releaseDate: ['',Validators.required],
      rating: ['',Validators.required],
      director: ['',Validators.required],
      poster: ['',Validators.required],
      language: ['',Validators.required],

    })
  }

  addMovie(){
    if(this.movieForm.invalid){
      return;
    }
    let payload = {
      "name":this.movieForm.value.movieName,
      "description":this.movieForm.value.description,
      "poster":this.movieForm.value.poster,
      "language": this.movieForm.value.language,
      "releaseDate":  this.movieForm.value.releaseDate,
      "director": this.movieForm.value.director,
      "rating": this.movieForm.value.rating,
      "cast":[]
  }
    this.dataService.addMovie(payload).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/']);
    })
  }

  reset(){
    this.movieForm.reset();
    this.alertService.showWarning("Form has been reset successfully","Form Reset");
  }
}
