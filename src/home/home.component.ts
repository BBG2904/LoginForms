import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
constructor(private route: ActivatedRoute){

}
  personName!: string;
  ngOnInit(): void {
    var name  = this.route.snapshot.paramMap.get('name');
    if(name !== null){
      this.personName = name;
    }
  }
}
