import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { }
  schoolImage:string="assets/images/schoolw.jpg";
  ngOnInit() {
  }

  onNavigate(){
    this.router.navigate(['']);
}

onNavigateToContactUs(){
  this.router.navigate(['/contact-us']);
}

}
