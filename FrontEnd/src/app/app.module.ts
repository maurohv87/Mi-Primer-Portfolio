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
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ButtonArribaComponent } from './components/button-arriba/button-arriba.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';


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
    InvestigacionComponent,
    ContactoComponent,
    ButtonArribaComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
