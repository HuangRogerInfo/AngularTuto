import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../film';
import { FilmService } from '../film.service';
import { FILMS } from '../mock-film-list';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {
  filmList: Film[];
  filmSelected: Film | undefined;

  constructor(
    private router: Router,
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    console.table(this.filmList);
    this.filmList = this.filmService.getFilmList();
  }

  //On crée une méthode qui va surgir après un évènement (+convertit string en nombre)
  selectFilm(idFilm: String) {
    const Film: Film | undefined = this.filmList.find(Film => Film.id == +idFilm)
    if (Film) {
      console.log(`Vous avez demandé le pokémon ${Film.title}`);
      this.filmSelected = Film;
    } else {
      console.log(`Vous avez demandé un film qui n'existe pas.`)
      this.filmSelected = Film;
    }
  }

  goToFilm(film: Film) {
    this.router.navigate(["/film", film.id])
  }

}
