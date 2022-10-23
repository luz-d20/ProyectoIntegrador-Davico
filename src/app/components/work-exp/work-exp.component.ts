import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent implements OnInit {

  experiencia: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarExperiencia():void {
    this.sExperiencia.lista().subscribe(data => {this.experiencia = data;}
    )
  }

  delete(id?: number) {
    if(id != undefined) {
      this.sExperiencia.delete(id).subscribe(data => {
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo eliminar la experiencia");
      })
    }
  }
}

