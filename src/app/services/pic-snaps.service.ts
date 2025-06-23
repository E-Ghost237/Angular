import { Injectable } from "@angular/core";
import { PicShare } from "../models/pic-share";
import { SnapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})
export class PicSnapsService {
    getFaceSnaps(): PicShare[] {
      throw new Error('Method not implemented.');
    }
    private picsnaps: PicShare[] = [
        new PicShare(
            'Nature',
            'A collection of nature photography',
            'https://upload.wikimedia.org/wikipedia/commons/7/70/Wildlife_Photographer_Giles_Laurent_in_a_ghillie_suit.jpg',
            new Date(),
            25,
        ).withLocation('Ontario'),
        new PicShare(
            'Urban',
            'A collection of urban photography',
            'https://cdn.tutsplus.com/cdn-cgi/image/width=640/photo/uploads/legacy/452_urbanphotography/4.jpg',
            new Date(),
            30,
        ).withLocation('New York'),
        new PicShare(
            'Architecture',
            'A collection of architectural photography',
            'https://www.prepa-architecture.fr/wp-content/uploads/2022/08/etudes-architecture-meilleur-pays.jpg',
            new Date(),
            40,
        ).withLocation('Tokyo'),
    ];

    getPicSnaps(): PicShare[] {
        return [...this.picsnaps];
    }

    likePicSnapById(picSnapId: string, snapType: SnapType): void {
        const foundPicSnap = this.picsnaps.find(picSnap => picSnap.id === picSnapId);
        if (!foundPicSnap) {
            throw new Error('PicSnap not found');
        }
         foundPicSnap.like(snapType);
    }
}