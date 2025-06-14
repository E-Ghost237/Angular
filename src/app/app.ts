import { Component, OnInit } from '@angular/core';
import { PicSnap } from './pic-snap/pic-snap';
import { PicShare } from './models/pic-share';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PicSnap
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {

  picshare!: PicShare[];

  myPic!: PicShare;
  myNextPic!: PicShare;
  myLastPic!: PicShare;

  ngOnInit(): void {
    this.picshare = [
      new PicShare(
        'Nature',
        'A collection of nature photography',
        'https://upload.wikimedia.org/wikipedia/commons/7/70/Wildlife_Photographer_Giles_Laurent_in_a_ghillie_suit.jpg',
        new Date(),
        25,
      ),
      new PicShare(
        'Urban',
        'A collection of urban photography',
        'https://cdn.tutsplus.com/cdn-cgi/image/width=640/photo/uploads/legacy/452_urbanphotography/4.jpg',
        new Date(),
        30,
      ),
      new PicShare(
        'Architecture',
        'A collection of architectural photography',
        'https://www.prepa-architecture.fr/wp-content/uploads/2022/08/etudes-architecture-meilleur-pays.jpg',
        new Date(),
        40,
      ),
    ];

    this.picshare[1].setLocation('Paris, France');
  }
}
