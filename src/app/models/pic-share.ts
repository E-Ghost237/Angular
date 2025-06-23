import { SnapType } from "./snap-type.type";

export class PicShare {
    location?: string;
    id: string = crypto.randomUUID();

    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public likes: number
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    addLike():void {
        this.likes++;
    }

    removeLike():void {
        this.likes--;
    }

    like(snapType: SnapType){
        if (snapType === 'like') {
            this.addLike();
        } else if (snapType === 'dislike') {
            this.removeLike();
        } else {
            throw new Error('Invalid snap type');
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): PicShare {
        this.setLocation(location);
        return this;
    }
}
