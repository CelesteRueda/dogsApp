import { Component } from '@angular/core';
import { DogService } from './doglist.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css'],
  providers: [DogService]
})

export class DogListComponent {
  dogs = [];
  
    constructor(private dogService: DogService) { }

    getDogs(): void {
      this.dogService.getDogsList().subscribe((data: any) => this.dogs=data);
  }
    ngOnInit(): void {
      this.getDogs(); 
  }
}