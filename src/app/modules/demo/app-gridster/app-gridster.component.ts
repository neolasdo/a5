import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {GridsterComponent, IGridsterDraggableOptions, IGridsterOptions} from 'angular2gridster';


@Component({
    selector: 'app-app-gridster',
    templateUrl: './app-gridster.component.html',
    styleUrls: ['./app-gridster.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppGridsterComponent implements OnInit {

    static X_PROPERTY_MAP: any = {
        sm: 'xSm',
        md: 'xMd',
        lg: 'xLg',
        xl: 'xXl'
    };

    static Y_PROPERTY_MAP: any = {
        sm: 'ySm',
        md: 'yMd',
        lg: 'yLg',
        xl: 'yXl'
    };

    @ViewChild(GridsterComponent) gridster: GridsterComponent;
    itemOptions = {
        maxWidth: 3,
        maxHeight: 4
    };
    gridsterOptions: IGridsterOptions = {
        // core configuration is default one - for smallest view. It has hidden minWidth: 0.
        lanes: 2, // amount of lanes (cells) in the grid
        direction: 'vertical', // floating top - vertical, left - horizontal
        floating: true,
        dragAndDrop: true, // enable/disable drag and drop for all items in grid
        resizable: true, // enable/disable resizing by drag and drop for all items in grid
        resizeHandles: {
            s: true,
            e: true,
            se: true
        },
        widthHeightRatio: 1, // proportion between item width and height
        lines: {
            visible: true,
            color: '#afafaf',
            width: 2
        },
        shrink: true,
        useCSSTransforms: true,
        responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
        responsiveDebounce: 500, // window resize debounce time
        // List of different gridster configurations for different breakpoints.
        // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
        // available to use with default minWidth assign to each.
        // - sm: 576 - Small devices
        // - md: 768 - Medium devices
        // - lg: 992 - Large devices
        // - xl: 1200 - Extra large
        // MinWidth for each breakpoint can be overwritten like it's visible below.
        // ResponsiveOptions can overwrite default configuration with any option available.
        responsiveOptions: [
            {
                breakpoint: 'sm',
                // minWidth: 480,
                lanes: 3
            },
            {
                breakpoint: 'md',
                minWidth: 768,
                lanes: 4
            },
            {
                breakpoint: 'lg',
                minWidth: 1250,
                lanes: 6
            },
            {
                breakpoint: 'xl',
                minWidth: 1800,
                lanes: 8
            }
        ]
    };
    gridsterDraggableOptions: IGridsterDraggableOptions = {
        handlerClass: 'panel-heading'
    };
    widgetsCopy = [];
    widgets: Array<any> = [
        {
            x: 0, y: 0,
            w: 1, h: 2,
            dragAndDrop: true,
            resizable: true,
            title: 'Basic form inputs 1'
        },
        {
            x: 1, y: 0, w: 3, h: 1,
            dragAndDrop: true,
            resizable: true,
            title: 'Basic form inputs 2'
        },
        {
            x: 1, y: 1, w: 2, h: 1,
            dragAndDrop: true,
            resizable: true,
            title: 'Basic form inputs 3'
        },
        {
            x: 3, y: 1, w: 1, h: 2,
            dragAndDrop: true,
            resizable: true,
            title: 'Basic form inputs 4'
        },
        {
            w: 1, h: 2,
            dragAndDrop: true,
            resizable: true,
            title: 'Basic form inputs x'
        }
    ];

    ngOnInit() {
        this.widgetsCopy = this.widgets.map(widget => ({...widget}));
    }

    onReflow(event) {
        console.log('onReflow', event);
    }

    optionsChange(options: IGridsterOptions) {
        this.gridsterOptions = options;
    }

    addWidgetFromDrag(gridster: GridsterComponent, event: any) {
        const item = event.item;
        const breakpoint = gridster.options.breakpoint;
        const widget = {
            w: item.w, h: item.h,
            dragAndDrop: true,
            resizable: true,
            title: 'New widget'
        };

        widget[AppGridsterComponent.X_PROPERTY_MAP[breakpoint]] = item.x;
        widget[AppGridsterComponent.Y_PROPERTY_MAP[breakpoint]] = item.y;

        this.widgets.push(widget);
    }

    over(event) {
        const size = event.item.calculateSize(event.gridster);

        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = size.width + 'px';
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = size.height + 'px';
        event.item.itemPrototype.$element.classList.add('is-over');
    }

    out(event) {
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.width = '';
        event.item.itemPrototype.$element.querySelector('.gridster-item-inner').style.height = '';
        event.item.itemPrototype.$element.classList.remove('is-over');
    }

    remove($event, index: number, gridster: GridsterComponent) {
        $event.preventDefault();
        this.widgets.splice(index, 1);
    }

    itemChange($event: any, gridster) {
        console.log('item change', $event);
    }
}
