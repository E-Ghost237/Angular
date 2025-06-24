import { Routes } from '@angular/router';
import { PicSnapList } from './pic-snap-list/pic-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SinglePicSnap } from './single-pic-snap/single-pic-snap';

export const routes: Routes = [
    {path: 'picsnap/:id', component: SinglePicSnap},
    { path: 'picsnap', component: PicSnapList },
    {path: '', component: LandingPage} 
];
