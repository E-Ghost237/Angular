import { Routes } from '@angular/router';
import { PicSnapList } from './pic-snap-list/pic-snap-list';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    { path: 'picsnap', component: PicSnapList },
    {path: '', component: LandingPage}
];
