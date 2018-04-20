import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ApiService} from '../../../shared/services';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/Subscription';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {Users} from '../../../../models/users';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateX(15px)'})),
            state('out', style({transform: 'translateX(-15px)'})),
            transition('in => out', animate('1000ms ease-in')),
            transition('out => in', animate('1000ms ease-in')),
        ])
    ]
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit {
    tryouts: Array<object> = []
    private _clockSubscription: Subscription;
    private rt: Subscription;
    time: Date;
    state: string;
    private clock: Observable<Date>;
    obs: Observable<any>;
    @ViewChild('canvas') public canvas: ElementRef;
    private cx: CanvasRenderingContext2D;



    constructor(private apiService: ApiService) {
    }
    ngAfterViewInit() {
        // get the context
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.cx = canvasEl.getContext('2d');

        // set the width and height
        canvasEl.width = 500;
        canvasEl.height = 500;

        // set some default properties about the line
        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#fff';

        // we'll implement this method to start capturing mouse events
        this.captureEvents(canvasEl);
    }
    ngOnInit() {
        this.getTryout();
        this.clock = Observable.interval(1000).map(tick => new Date()).share();
        this.state = 'in';
        this.rotate();
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }
    startTime() {
        this._clockSubscription = this.clock.subscribe(time => this.time = time);
        this.rt = this.obs.subscribe(state => this.state = state);
    }
    rotate() {
        this.obs = Observable.interval(1000).map(thing => this.dis()).share();
    }
    dis() {
        let state = (this.state === 'in') ? 'out'  : 'in';
        return state;
    }
    stopRotate() {
        this.rt.unsubscribe();
    }
    getTryout() {
        this.apiService.get('tryouts/coach/tryouts')
            .pipe(map(
                res => {
                    return res.data;
                })).subscribe(
            data => {this.tryouts = data; },
            err => {
                console.log(err);
            }
        );
    }

    stopTime() {
        this._clockSubscription.unsubscribe();
        this.rt.unsubscribe();
    }

    /**
     *    Draw canvas
     */
    private captureEvents(canvasEl: HTMLCanvasElement) {
        Observable
            .fromEvent(canvasEl, 'mousedown')
            .switchMap((e) => {
                return Observable
                    .fromEvent(canvasEl, 'mousemove')
                    .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
                    .takeUntil(Observable.fromEvent(canvasEl, 'mouseleave'))
                    .pairwise();
            })
            .subscribe((res: [MouseEvent, MouseEvent]) => {
                const rect = canvasEl.getBoundingClientRect();
                const prevPos = {
                    x: res[0].clientX - rect.left,
                    y: res[0].clientY - rect.top
                };
                const currentPos = {
                    x: res[1].clientX - rect.left,
                    y: res[1].clientY - rect.top
                };
                this.drawOnCanvas(prevPos, currentPos);
            });
    }
    private drawOnCanvas(
        prevPos: { x: number, y: number },
        currentPos: { x: number, y: number }
    ) {
        if (!this.cx) { return; }
        this.cx.beginPath();
        if (prevPos) {
            this.cx.moveTo(prevPos.x, prevPos.y);
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    }
    clearCanvas() {
        this.cx.clearRect(0,  0, 500, 500);
    }
}
