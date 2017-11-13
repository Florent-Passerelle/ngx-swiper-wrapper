import { InjectionToken } from '@angular/core';
export declare const SWIPER_CONFIG: InjectionToken<SwiperConfigInterface>;
export declare const SwiperEvents: string[];
export interface SwiperConfigInterface {
    initialSlide?: number;
    direction?: string;
    speed?: number;
    setWrapperSize?: boolean;
    virtualTranslate?: boolean;
    width?: number;
    height?: number;
    autoHeight?: boolean;
    roundLengths?: boolean;
    nested?: boolean;
    uniqueNavElements?: boolean;
    effect?: string;
    runCallbacksOnInit?: boolean;
    spaceBetween?: number;
    slidesPerView?: number | 'auto';
    slidesPerColumn?: number;
    slidesPerColumnFill?: string;
    slidesPerGroup?: number;
    centeredSlides?: boolean;
    slidesOffsetBefore?: number;
    slidesOffsetAfter?: number;
    normalizeSlideIndex?: boolean;
    grabCursor?: boolean;
    touchEventsTarget?: string;
    touchRatio?: number;
    touchAngle?: number;
    simulateTouch?: boolean;
    shortSwipes?: boolean;
    longSwipes?: boolean;
    longSwipesRatio?: number;
    longSwipesMs?: number;
    followFinger?: boolean;
    allowTouchMove?: boolean;
    threshold?: number;
    touchMoveStopPropagation?: boolean;
    iOSEdgeSwipeDetection?: boolean;
    iOSEdgeSwipeThreshold?: number;
    touchReleaseOnEdges?: boolean;
    passiveListeners?: boolean;
    resistance?: boolean;
    resistanceRatio?: number;
    allowSlidePrev?: boolean;
    allowSlideNext?: boolean;
    noSwiping?: boolean;
    noSwipingClass?: string;
    swipeHandler?: string | HTMLElement;
    preventClicks?: boolean;
    preventClicksPropagation?: boolean;
    slideToClickedSlide?: boolean;
    freeMode?: boolean;
    freeModeMomentum?: boolean;
    freeModeMomentumRatio?: number;
    freeModeMomentumVelocityRatio?: number;
    freeModeMomentumBounce?: boolean;
    freeModeMomentumBounceRatio?: number;
    freeModeMinimumVelocity?: number;
    freeModeSticky?: boolean;
    watchSlidesProgress?: boolean;
    watchSlidesVisibility?: boolean;
    preloadImages?: boolean;
    updateOnImagesReady?: boolean;
    loop?: boolean;
    loopAdditionalSlides?: number;
    loopedSlides?: number;
    loopFillGroupWithBlank?: boolean;
    breakpoints?: SwiperBreakpointsInterface;
    observer?: boolean;
    observeParents?: boolean;
    containerModifierClass?: string;
    slideClass?: string;
    slideActiveClass?: string;
    slideDuplicatedActiveClass?: string;
    slideVisibleClass?: string;
    slideDuplicateClass?: string;
    slideNextClass?: string;
    slideDuplicatedNextClass?: string;
    slidePrevClass?: string;
    slideDuplicatedPrevClass?: string;
    wrapperClass?: string;
    fadeEffect?: SwiperFadeEffectInterface;
    flipEffect?: SwiperFlipEffectInterface;
    cubeEffect?: SwiperCubeEffectInterface;
    coverflowEffect?: SwiperCoverflowEffectInterface;
    parallax?: boolean;
    keyboard?: boolean;
    a11y?: boolean | SwiperA11YInterface;
    lazy?: boolean | SwiperLazyInterface;
    zoom?: boolean | SwiperZoomInterface;
    history?: boolean | SwiperHistoryInterface;
    virtual?: boolean | SwiperVirtualInterface;
    autoplay?: boolean | SwiperAutoplayInterface;
    scrollbar?: boolean | SwiperScrollbarInterface;
    controller?: boolean | SwiperControllerInterface;
    navigation?: boolean | SwiperNavigationInterface;
    pagination?: boolean | SwiperPaginationInterface;
    mousewheel?: boolean | SwiperMousewheelInterface;
    hashNavigation?: boolean | SwiperHashNavigationInterface;
}
export interface SwiperA11YInterface {
    prevSlideMessage?: string;
    nextSlideMessage?: string;
    firstSlideMessage?: string;
    lastSlideMessage?: string;
    paginationBulletMessage?: string;
    notificationClass?: string;
}
export interface SwiperLazyInterface {
    loadPrevNext?: boolean;
    loadPrevNextAmount?: number;
    loadOnTransitionStart?: boolean;
    elementClass?: string;
    loadingClass?: string;
    loadedClass?: string;
    preloaderClass?: string;
}
export interface SwiperZoomInterface {
    maxRatio?: number;
    minRatio?: number;
    toggle?: boolean;
    containerClass?: string;
    zoomedSlideClass?: string;
}
export interface SwiperHistoryInterface {
    replaceState?: boolean;
    key?: string;
}
export interface SwiperVirtualInterface {
    slides?: any[];
    cache?: boolean;
    renderSlide?: SwiperRenderSlideFunction;
    renderExternal?: SwiperRenderExternalFunction;
}
export interface SwiperAutoplayInterface {
    delay?: number;
    stopOnLast?: boolean;
    disableOnInteraction?: boolean;
}
export interface SwiperScrollbarInterface {
    el?: string | HTMLElement;
    hide?: boolean;
    draggable?: boolean;
    snapOnRelease?: boolean;
    dragSize?: number | 'auto';
}
export interface SwiperControllerInterface {
    control?: any;
    inverse?: boolean;
    by?: 'slide' | 'container';
}
export interface SwiperNavigationInterface {
    nextEl?: string | HTMLElement;
    prevEl?: string | HTMLElement;
    hideOnClick?: boolean;
    disabledClass?: string;
    hiddenClass?: string;
}
export interface SwiperPaginationInterface {
    el?: string | HTMLElement;
    type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
    bulletElement?: string;
    dynamicBullets?: boolean;
    hideOnClick?: boolean;
    clickable?: boolean;
    renderBullet?: SwiperRenderBulletFunction;
    renderFraction?: SwiperRenderFractionFunction;
    renderProgressbar?: SwiperRenderProgressbarFunction;
    renderCustom?: SwiperRenderCustomFunction;
    bulletClass?: string;
    bulletActiveClass?: string;
    modifierClass?: string;
    currentClass?: string;
    totalClass?: string;
    hiddenClass?: string;
    progressbarFillClass?: string;
    clickableClass?: string;
}
export interface SwiperMousewheelInterface {
    forceToAxis?: boolean;
    releaseOnEdges?: boolean;
    invert?: boolean;
    sensitivity?: number;
    eventsTarget?: string | HTMLElement;
}
export interface SwiperHashNavigationInterface {
    watchState?: boolean;
    replaceState?: boolean;
}
export interface SwiperFadeEffectInterface {
    crossFade?: boolean;
}
export interface SwiperFlipEffectInterface {
    limitRotation?: boolean;
    slideShadows?: boolean;
}
export interface SwiperCubeEffectInterface {
    shadow?: boolean;
    shadowScale?: number;
    shadowOffset?: number;
    slideShadows?: boolean;
}
export interface SwiperCoverflowEffectInterface {
    depth?: number;
    rotate?: number;
    stretch?: number;
    modifier?: number;
    slideShadows?: boolean;
}
export interface SwiperBreakpointInterface {
    spaceBetween?: number;
    slidesPerView?: number;
    slidesPerGroup?: number;
}
export interface SwiperBreakpointsInterface {
    [size: number]: SwiperBreakpointInterface;
}
export declare class SwiperConfig implements SwiperConfigInterface {
    initialSlide: number;
    direction: string;
    speed: number;
    setWrapperSize: boolean;
    virtualTranslate: boolean;
    width: number;
    height: number;
    autoHeight: boolean;
    roundLengths: boolean;
    nested: boolean;
    uniqueNavElements: boolean;
    effect: string;
    runCallbacksOnInit: boolean;
    spaceBetween: number;
    slidesPerView: number | 'auto';
    slidesPerColumn: number;
    slidesPerColumnFill: string;
    slidesPerGroup: number;
    centeredSlides: boolean;
    slidesOffsetBefore: number;
    slidesOffsetAfter: number;
    normalizeSlideIndex: boolean;
    grabCursor: boolean;
    touchEventsTarget: string;
    touchRatio: number;
    touchAngle: number;
    simulateTouch: boolean;
    shortSwipes: boolean;
    longSwipes: boolean;
    longSwipesRatio: number;
    longSwipesMs: number;
    followFinger: boolean;
    allowTouchMove: boolean;
    threshold: number;
    touchMoveStopPropagation: boolean;
    iOSEdgeSwipeDetection: boolean;
    iOSEdgeSwipeThreshold: number;
    touchReleaseOnEdges: boolean;
    passiveListeners: boolean;
    resistance: boolean;
    resistanceRatio: number;
    allowSlidePrev: boolean;
    allowSlideNext: boolean;
    noSwiping: boolean;
    noSwipingClass: string;
    swipeHandler: string | HTMLElement;
    preventClicks: boolean;
    preventClicksPropagation: boolean;
    slideToClickedSlide: boolean;
    freeMode: boolean;
    freeModeMomentum: boolean;
    freeModeMomentumRatio: number;
    freeModeMomentumVelocityRatio: number;
    freeModeMomentumBounce: boolean;
    freeModeMomentumBounceRatio: number;
    freeModeMinimumVelocity: number;
    freeModeSticky: boolean;
    watchSlidesProgress: boolean;
    watchSlidesVisibility: boolean;
    preloadImages: boolean;
    updateOnImagesReady: boolean;
    loop: boolean;
    loopAdditionalSlides: number;
    loopedSlides: number;
    loopFillGroupWithBlank: boolean;
    breakpoints: any;
    observer: boolean;
    observeParents: boolean;
    containerModifierClass: string;
    slideClass: string;
    slideActiveClass: string;
    slideDuplicatedActiveClass: string;
    slideVisibleClass: string;
    slideDuplicateClass: string;
    slideNextClass: string;
    slideDuplicatedNextClass: string;
    slidePrevClass: string;
    slideDuplicatedPrevClass: string;
    wrapperClass: string;
    fadeEffect: any;
    flipEffect: any;
    cubeEffect: any;
    coverflowEffect: any;
    parallax: boolean;
    keyboard: boolean;
    a11y: boolean | any;
    lazy: boolean | any;
    zoom: boolean | any;
    history: boolean | any;
    virtual: boolean | any;
    autoplay: boolean | any;
    scrollbar: boolean | any;
    controller: boolean | any;
    navigation: boolean | any;
    pagination: boolean | any;
    mousewheel: boolean | any;
    hashNavigation: boolean | any;
    constructor(config?: SwiperConfigInterface);
    assign(config?: SwiperConfigInterface | any, target?: any): void;
}
export declare type SwiperRenderSlideFunction = (index: number) => HTMLElement;
export declare type SwiperRenderExternalFunction = (data: any) => void;
export declare type SwiperRenderCustomFunction = (current: number, total: number) => string;
export declare type SwiperRenderBulletFunction = (index: number, className: string) => string;
export declare type SwiperRenderFractionFunction = (currentClass: string, totalClass: string) => string;
export declare type SwiperRenderProgressbarFunction = (progressbarClass: string) => string;
