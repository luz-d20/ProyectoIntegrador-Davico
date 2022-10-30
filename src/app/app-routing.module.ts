import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './components/work-exp/edit-experiencia.component';
import { NewExperienciaComponent } from './components/work-exp/new-experiencia.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
