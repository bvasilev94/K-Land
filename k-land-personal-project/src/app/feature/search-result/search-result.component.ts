import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }
}
