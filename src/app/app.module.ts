import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { HomeModule } from './home/home.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PlatillosModule } from './platillos/platillos.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

const otherModules = [
  SharedModule,
  CoreModule,
  AuthModule,
  UsuarioModule,
  IngredientesModule,
  HomeModule,
  PlatillosModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    YouTubePlayerModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    otherModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
