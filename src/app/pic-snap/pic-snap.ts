import { Component, Input, OnInit } from '@angular/core';
import { PicShare } from '../models/pic-share';

@Component({
  selector: 'app-pic-snap',
  imports: [],
  templateUrl: './pic-snap.html',
  styleUrl: './pic-snap.scss'
})
export class PicSnap implements OnInit {
    @Input() picshare!: PicShare;

  snapButtonText!: string;
  userhasLiked!: boolean;

ngOnInit(): void {
  this.snapButtonText = 'Like';
  this.userhasLiked = false;
  }

  onSnapImage(): void {
    if (this.userhasLiked) {
      this.picshare.likes--;
      this.snapButtonText = 'Like';
    } else {
      this.picshare.likes++;
      this.snapButtonText = 'Unlike';
    }
    this.userhasLiked = !this.userhasLiked;
  }
}
