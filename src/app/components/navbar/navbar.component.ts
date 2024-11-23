import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    
  }

  toAbout(){
document.getElementById("about")?.scrollIntoView();
  }
  toSkill(){
    document.getElementById("skills")?.scrollIntoView();
  }
  ToProjet(){
    document.getElementById("projects")?.scrollIntoView();
  }
  toContact()
  {
    document.getElementById("contact")?.scrollIntoView();
  }
}
