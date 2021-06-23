import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotoComponent } from './components/foto/foto.component';

import { VideoComponent } from './components/video/video.component';


const routes: Routes = [
  { path: 'app-video', component: VideoComponent},
  { path: 'app-foto', component: FotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
