import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { AboutFilmRoutingModule } from './about-film-routing.module';
import { AppModule } from '../../app.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutFilmRoutingModule,
    YouTubePlayerModule,
    MaterialModule
  ]
})
export class AboutFilmModule { }
