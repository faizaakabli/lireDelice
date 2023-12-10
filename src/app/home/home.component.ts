import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];

  constructor(private router: Router, private authService: AuthService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getBooks().subscribe(
      (data: any[]) => {
        this.books = data;
      },
      error => {
        console.error('Error fetching books:', error);
      }
    );
  }

  performSearch(searchTerm: string) {
    this.filteredBooks = this.books.filter(book =>
      book.titre.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  }
}