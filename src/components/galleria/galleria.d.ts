import { ElementRef, AfterViewChecked, AfterViewInit, OnDestroy, IterableDiffers } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Galleria implements AfterViewChecked, AfterViewInit, OnDestroy {
    private el;
    private domHandler;
    images: any[];
    style: any;
    styleClass: string;
    panelWidth: number;
    panelHeight: number;
    frameWidth: number;
    frameHeight: number;
    activeIndex: number;
    showFilmstrip: boolean;
    autoPlay: boolean;
    transitionInterval: number;
    showCaption: boolean;
    onImageClicked: any;
    differ: any;
    slideshowActive: boolean;
    private container;
    private panelWrapper;
    private panels;
    private caption;
    private stripWrapper;
    private strip;
    private frames;
    private interval;
    private stripLeft;
    private imagesChanged;
    private initialized;
    constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers);
    ngAfterViewChecked(): void;
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    render(): void;
    startSlideshow(): void;
    stopSlideshow(): void;
    clickNavRight(): void;
    clickNavLeft(): void;
    frameClick(frame: any): void;
    prev(): void;
    next(): void;
    select(index: any, reposition: any): void;
    clickImage(event: any, image: any, i: any): void;
    ngOnDestroy(): void;
}
