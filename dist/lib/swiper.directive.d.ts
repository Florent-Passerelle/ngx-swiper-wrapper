import { OnInit, DoCheck, OnChanges, EventEmitter, NgZone, ElementRef, SimpleChanges, KeyValueDiffers } from '@angular/core';
import { SwiperConfigInterface } from './swiper.interfaces';
export declare class SwiperDirective implements OnInit, DoCheck, OnChanges {
    private zone;
    private elementRef;
    private differs;
    private defaults;
    private instance;
    private configDiff;
    private initialIndex;
    index: number;
    disabled: boolean;
    config: SwiperConfigInterface;
    indexChange: EventEmitter<number>;
    S_INIT: EventEmitter<any>;
    S_BEFOREDESTROY: EventEmitter<any>;
    S_SCROLL: EventEmitter<any>;
    S_PROGRESS: EventEmitter<any>;
    S_RESIZE: EventEmitter<any>;
    S_BEFORERESIZE: EventEmitter<any>;
    S_KEYPRESS: EventEmitter<any>;
    S_SLIDERMOVE: EventEmitter<any>;
    S_SLIDECHANGE: EventEmitter<any>;
    S_SETTRANSLATE: EventEmitter<any>;
    S_SETTRANSITION: EventEmitter<any>;
    S_FROMEDGE: EventEmitter<any>;
    S_REACHEND: EventEmitter<any>;
    S_REACHBEGINNING: EventEmitter<any>;
    S_AUTOPLAY: EventEmitter<any>;
    S_AUTOPLAYSTART: EventEmitter<any>;
    S_AUTOPLAYSTOP: EventEmitter<any>;
    S_IMAGESREADY: EventEmitter<any>;
    S_LAZYIMAGELOAD: EventEmitter<any>;
    S_LAZYIMAGEREADY: EventEmitter<any>;
    S_SCROLLDRAGEND: EventEmitter<any>;
    S_SCROLLDRAGMOVE: EventEmitter<any>;
    S_SCROLLDRAGSTART: EventEmitter<any>;
    S_TAP: EventEmitter<any>;
    S_CLICK: EventEmitter<any>;
    S_DOUBLETAP: EventEmitter<any>;
    S_TOUCHEND: EventEmitter<any>;
    S_TOUCHMOVE: EventEmitter<any>;
    S_TOUCHSTART: EventEmitter<any>;
    S_TOUCHMOVEOPPOSITE: EventEmitter<any>;
    S_TRANSITIONEND: EventEmitter<any>;
    S_TRANSITIONSTART: EventEmitter<any>;
    S_SLIDEPREVTRANSITIONEND: EventEmitter<any>;
    S_SLIDEPREVTRANSITIONSTART: EventEmitter<any>;
    S_SLIDENEXTTRANSITIONEND: EventEmitter<any>;
    S_SLIDENEXTTRANSITIONSTART: EventEmitter<any>;
    S_SLIDECHANGETRANSITIONEND: EventEmitter<any>;
    S_SLIDECHANGETRANSITIONSTART: EventEmitter<any>;
    constructor(zone: NgZone, elementRef: ElementRef, differs: KeyValueDiffers, defaults: SwiperConfigInterface);
    ngOnInit(): void;
    ngDoCheck(): void;
    destroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    swiper(): any;
    update(): void;
    getIndex(real?: boolean): any;
    setIndex(index: number, speed?: number, silent?: boolean): void;
    prevSlide(speed?: number, silent?: boolean): void;
    nextSlide(speed?: number, silent?: boolean): void;
    stopAutoplay(reset?: boolean): void;
    startAutoplay(reset?: boolean): void;
}
