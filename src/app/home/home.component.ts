import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
import { HomeService } from './home.service';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  books: any[] = [];
  filteredBooks: any[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedGenre: string | null = null; // Ajoutez une propriété pour suivre le genre sélectionné

  constructor(private router: Router, private authService: AuthService, private homeService: HomeService, private cartService: CartService) { }
  ngOnInit(): void {
    this.homeService.getBooks().subscribe(
      (data: any[]) => {
        this.books = data;
        this.filteredBooks = data;
      },
      error => {
        console.error('Error fetching books:', error);
      }
    );
  }

  //Barre de recherche
  performSearch(searchTerm: string) {
    this.filteredBooks = this.books.filter(book =>
      book.titre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //Boutton trie 
  sortBooks() {
    this.books.sort((a, b) => {
      const priceA = parseFloat(a.prix.replace('€', '').trim());
      const priceB = parseFloat(b.prix.replace('€', '').trim());

      if (this.sortDirection === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });

    // Inverser la direction du tri pour le prochain clic
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  filterByGenre(genre: string | null) {
    this.selectedGenre = genre;
    this.applyGenreFilter();
  }

  applyGenreFilter() {
    // Filtrer par genre si un genre est sélectionné, sinon afficher tous les livres
    this.filteredBooks = [];
  
    if (this.selectedGenre) {
      this.filteredBooks = this.books.filter(book => book.genre.toLowerCase() === this.selectedGenre?.toLowerCase());
    } else {
      this.filteredBooks = [...this.books]; // Si aucun genre n'est sélectionné, copiez tous les livres
    }
  }
}