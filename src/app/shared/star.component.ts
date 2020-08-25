import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // rating value is passed as the for loop in product-list html loops
    @Input() rating: number;
    starWidth: number;
    @Output() ratingInfoPassed: EventEmitter<string> = new EventEmitter<string>();

    // @Output() notify(): EventEmitter<string> = new EventEmitter<string>();

    // ngOnchanges watches for changes to input properties
    ngOnChanges(): void {
        console.log(
            "change happended"
        )

        this.starWidth = this.rating * 75 / 5  ;
    }

    onClick(): void {
        // .emit raises the event that is used by event binding
        this.ratingInfoPassed.emit(`The rating ${this.rating} was clicked`);
    }

}
