import { Component, Input, OnInit } from '@angular/core';
import { PicShare } from '../models/pic-share';
import { NgClass, NgStyle, UpperCasePipe, DatePipe } from '@angular/common';
import { PicSnapsService } from '../services/pic-snaps.service';

@Component({
  selector: 'app-pic-snap',
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './pic-snap.html',
  styleUrl: './pic-snap.scss',
})
export class PicSnap implements OnInit {
  @Input() picshare!: PicShare;

  snapButtonText!: string;
  userhasLiked!: boolean;

 constructor(private PicSnapsService: PicSnapsService) { }

  ngOnInit(): void {
    this.snapButtonText = '👍';
    this.userhasLiked = false;
  }

  onSnapImage(): void {
    if (this.userhasLiked) {
      this.dislike();
    } else {
      this.like();
    }
  }

  like(): void {
    this.PicSnapsService.likePicSnapById(this.picshare.id, 'like');
    this.snapButtonText = '👎';
    this.userhasLiked = true;
  }

  dislike(): void {
    this.PicSnapsService.likePicSnapById(this.picshare.id, 'dislike');
    this.snapButtonText = '👍';
    this.userhasLiked = false;
  }
}

