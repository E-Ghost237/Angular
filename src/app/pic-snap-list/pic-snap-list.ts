import { Component, OnInit } from '@angular/core';
import { PicShare } from '../models/pic-share';
import { PicSnap } from "../pic-snap/pic-snap";
import { PicSnapsService } from '../services/pic-snaps.service';

@Component({
  selector: 'app-pic-snap-list',
  imports: [PicSnap],
  templateUrl: './pic-snap-list.html',
  styleUrl: './pic-snap-list.scss'
})
export class PicSnapList implements OnInit {

  picshare!: PicShare[];

  myPic!: PicShare;
  myNextPic!: PicShare;
  myLastPic!: PicShare;

  constructor (private PicSnapsService : PicSnapsService){
  }

  ngOnInit(): void {
    this.picshare =this.PicSnapsService.getPicSnaps();
  }
}
