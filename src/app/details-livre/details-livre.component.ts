import { Component , OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute , Router } from '@angular/router';
import { LivreService } from '../shared/services/livre.service';

@Component({
  selector: 'app-details-livre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-livre.component.html',
  styleUrl: './details-livre.component.scss'
})

export class DetailsLivreComponent implements OnInit {
  livreId: string = '';
  livre: any;
  constructor(private route : ActivatedRoute, private livreService: LivreService , private router: Router){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.livreId = params['id'];
      this.loadDetails(this.livreId);
    });
  }

  loadDetails(livreId: string) {
    this.livreService.getLivreById(livreId).subscribe(
      (data) => {
        this.livre = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails du livre :', error);
      }
    );
  }

  retourALaListeDesLivres(){
    this.router.navigate(['/home']);
  }
}
