export class PicShare {

    location?: string ;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public likes: number,) {}

    setLocation(location: string): void {
        this.location = location;
    }
}