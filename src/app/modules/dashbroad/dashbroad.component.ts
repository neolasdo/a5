import {Component, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
    selector: 'app-dashbroad',
    templateUrl: './dashbroad.component.html',
    styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent implements OnInit {
    imageSources: Array<any> = [
        {
            url : 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg',
            href: '#',
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
            'Accusantium alias beatae ea earum est exercitationem expedita id ' +
            'inventore ipsum labore magnam minima modi molestiae nostrum, quo ratione rerum saepe vero?',
            title: 'Jbareaham'
        },
        {
            url : 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg',
            href: '#',
            caption: '',
            title: 'Akrales'
        },
        {
            url : 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56674755/mr_pb_is_the_best.0.jpg',
            href: '#',
            caption: '',
            title: 'Is the best?'
        },
        {
            url : 'https://cdn-images-1.medium.com/max/2000/1*Nccd2ofdArlXF7v58UK94Q.jpeg',
            href: '#',
            caption: '',
            title: 'Nccd'
        }
    ];

    @ViewChild('autoShownModal') autoShownModal: ModalDirective;
    isModalShown: boolean = false;
    isCollapsed = true;
    bsValue = new Date();
    bsRangeValue: Date[];
    maxDate = new Date();

    constructor() {
        this.maxDate.setDate(this.maxDate.getDate() + 7);
        this.bsRangeValue = [this.bsValue, this.maxDate];
    }

    ngOnInit() {
    }
    showModal(): void {
        this.isModalShown = true;
    }

    hideModal(): void {
        this.autoShownModal.hide();
    }

    onHidden(): void {
        this.isModalShown = false;
    }
    swipeLeft() {
        console.log('left');
    }

    swipeRight() {
        console.log('right');
    }
}
