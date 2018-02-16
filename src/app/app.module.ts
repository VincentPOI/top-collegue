import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import {CollegueService} from './shared/service/collegue.service';
import {HttpClientModule} from '@angular/common/http';
import { BoutonsComponent } from './boutons/boutons.component';
import { RouterModule, Routes } from '@angular/router';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { DetailComponent } from './detail/detail.component';


const appRoutes: Routes = [
{ path: 'classique', component: ClassiqueComponent }, // /page1 affiche le composant A
{ path: 'tableau', component: TableauComponent },
{ path: 'caroussel', component: CarousselComponent },
{ path: 'detail/:pseudo', component: DetailComponent },
{ path: '**', redirectTo: 'classique'} // redirige vers la route page1 par défaut
];


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    BoutonsComponent,
    ClassiqueComponent,
    TableauComponent,
    CarousselComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
