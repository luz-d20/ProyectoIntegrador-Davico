import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html'
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = "";
  descripcionE: string = "";

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(data => {
      alert("Experiencia creada con éxito");
      this.router.navigate(['']);
    }, err => {
      alert("Error al crear la experiencia");
      this.router.navigate(['']);
    });
  }
}
