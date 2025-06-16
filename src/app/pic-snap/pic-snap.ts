import { Component, Input, OnInit } from '@angular/core';
import { PicShare } from '../models/pic-share';
import { LowerCasePipe, NgClass, NgStyle, UpperCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pic-snap',
  imports: [NgStyle,
            NgClass,
            UpperCasePipe,
            LowerCasePipe,
            TitleCasePipe

  ],
  templateUrl: './pic-snap.html',
  styleUrl: './pic-snap.scss'
})
export class PicSnap implements OnInit {
    @Input() picshare!: PicShare;

  snapButtonText!: string;
  userhasLiked!: boolean;

ngOnInit(): void {
  this.snapButtonText = '👍';
  this.userhasLiked = false;
  }

  onSnapImage(): void {
    if (this.userhasLiked) {
      this.picshare.likes--;
      this.snapButtonText = '👍';
    } else {
      this.picshare.likes++;
      this.snapButtonText = '👎';
    }
    this.userhasLiked = !this.userhasLiked;
  }
}
