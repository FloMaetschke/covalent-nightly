import { AfterViewInit, ChangeDetectorRef, QueryList, ElementRef, Renderer2, AfterViewChecked } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { TdVirtualScrollRowDirective } from './virtual-scroll-row.directive';
export declare class TdVirtualScrollContainerComponent implements AfterViewInit, AfterViewChecked {
    private _elementRef;
    private _domSanitizer;
    private _renderer;
    private _changeDetectorRef;
    private _initialized;
    private _totalHeight;
    private _hostHeight;
    private _scrollVerticalOffset;
    private _offsetTransform;
    private _fromRow;
    private _toRow;
    private _data;
    private _virtualData;
    /**
     * data: any[]
     * List of items to virtually iterate on.
     */
    data: any[];
    readonly virtualData: any[];
    _rows: QueryList<ElementRef>;
    _rowTemplate: TdVirtualScrollRowDirective;
    readonly rowHeight: number;
    readonly totalHeight: number;
    readonly fromRow: number;
    readonly toRow: number;
    readonly offsetTransform: SafeStyle;
    constructor(_elementRef: ElementRef, _domSanitizer: DomSanitizer, _renderer: Renderer2, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    /**
     * trackBy?: TrackByFunction
     * This accepts the same trackBy function [ngFor] does.
     * https://angular.io/api/core/TrackByFunction
     */
    trackBy: any;
    handleScroll(event: Event): void;
    /**
     * Method to refresh and recalculate the virtual rows
     * e.g. after changing the [data] content
     */
    refresh(): void;
    /**
     * Method to scroll to a specific row of the list.
     */
    scrollTo(row: number): void;
    /**
     * Method to scroll to the start of the list.
     */
    scrollToStart(): void;
    /**
     * Method to scroll to the end of the list.
     */
    scrollToEnd(): void;
    private _calculateVirtualRows();
}
