import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PorfolioService } from './servicios/porfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialComponent } from './components/social/social.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LogoAPComponent,
    BannerComponent,
    HeaderComponent,
    SocialComponent,
    AcercaDeComponent,
    AppComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillsComponent,
    ProyectoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
