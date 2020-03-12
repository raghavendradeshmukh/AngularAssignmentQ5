import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  homeImage:string="assets/images/home.jpg";
  ngOnInit() {
  }
  onNavigate(){
      this.router.navigate(['/events']);
  }

  onNavigateToContactUs(){
    this.router.navigate(['/contact-us']);
  }
}
