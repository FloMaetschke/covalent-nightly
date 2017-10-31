import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
var TdLayoutManageListComponent = (function () {
    function TdLayoutManageListComponent() {
        /**
         * mode?: 'side', 'push' or 'over'
         *
         * The mode or styling of the sidenav.
         * Defaults to "side".
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.mode = 'side';
        /**
         * opened?: boolean
         *
         * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
         * Defaults to "true".
         *
         * See "MatSidenav" documentation for more info.
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.opened = true;
        /**
         * sidenavWidth?: string
         *
         * Sets the "width" of the sidenav in either "px" or "%"
         * Defaults to "257px".
         *
         * https://github.com/angular/material2/tree/master/src/lib/sidenav
         */
        this.sidenavWidth = '257px';
    }
    Object.defineProperty(TdLayoutManageListComponent.prototype, "disableClose", {
        /**
         * Checks if `ESC` should close the sidenav
         * Should only close it for `push` and `over` modes
         */
        get: function () {
            return this.mode === 'side';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Proxy toggle method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.toggle = function () {
        return this.sidenav.toggle(!this.sidenav.opened);
    };
    /**
     * Proxy open method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.open = function () {
        return this.sidenav.open();
    };
    /**
     * Proxy close method to access sidenav from outside (from td-layout template).
     */
    TdLayoutManageListComponent.prototype.close = function () {
        return this.sidenav.close();
    };
    return TdLayoutManageListComponent;
}());
tslib_1.__decorate([
    ViewChild(MatSidenav),
    tslib_1.__metadata("design:type", MatSidenav)
], TdLayoutManageListComponent.prototype, "sidenav", void 0);
tslib_1.__decorate([
    Input('mode'),
    tslib_1.__metadata("design:type", String)
], TdLayoutManageListComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input('opened'),
    tslib_1.__metadata("design:type", Boolean)
], TdLayoutManageListComponent.prototype, "opened", void 0);
tslib_1.__decorate([
    Input('sidenavWidth'),
    tslib_1.__metadata("design:type", String)
], TdLayoutManageListComponent.prototype, "sidenavWidth", void 0);
TdLayoutManageListComponent = tslib_1.__decorate([
    Component({
        selector: 'td-layout-manage-list',
        styles: [".md-whiteframe-1dp, .md-whiteframe-z1, .mat-whiteframe-1dp, .mat-whiteframe-z1 { -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); } .md-whiteframe-2dp, .mat-whiteframe-2dp { -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12); box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12); } .md-whiteframe-3dp, .mat-whiteframe-3dp { -webkit-box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12); box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.12); } .md-whiteframe-4dp, .md-whiteframe-z2, .mat-whiteframe-4dp, .mat-whiteframe-z2 { -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } .md-whiteframe-5dp, .mat-whiteframe-5dp { -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); } .md-whiteframe-6dp, .mat-whiteframe-6dp { -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); } .md-whiteframe-7dp, .md-whiteframe-z3, .mat-whiteframe-7dp, .mat-whiteframe-z3 { -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); } .md-whiteframe-8dp, .mat-whiteframe-8dp { -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); } .md-whiteframe-9dp, .mat-whiteframe-9dp { -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); } .md-whiteframe-10dp, .md-whiteframe-z4, .mat-whiteframe-10dp, .mat-whiteframe-z4 { -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); } .md-whiteframe-11dp, .mat-whiteframe-11dp { -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); } .md-whiteframe-12dp, .mat-whiteframe-12dp { -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); } .md-whiteframe-13dp, .md-whiteframe-z5, .mat-whiteframe-13dp, .mat-whiteframe-z5 { -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); } .md-whiteframe-14dp, .mat-whiteframe-14dp { -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); } :host { display: -webkit-box; display: -ms-flexbox; display: flex; margin: 0; width: 100%; min-height: 100%; height: 100%; overflow: hidden; } :host mat-sidenav-container.td-layout-manage-list { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opened, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-opening, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closed, :host mat-sidenav-container.td-layout-manage-list > mat-sidenav.mat-drawer-closing { -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2); } :host .td-layout-manage-list-sidenav { text-align: start; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; } :host .td-layout-manage-list-main { margin: 0; width: 100%; min-height: 100%; height: 100%; position: relative; overflow: auto; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; } :host .td-layout-manage-list-main .td-layout-manage-list-content { display: block; position: relative; overflow: auto; -webkit-overflow-scrolling: touch; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; } :host /deep/ mat-sidenav-container.td-layout-manage-list { /* Ensure the left sidenav is a flex column & 100% height */ } :host /deep/ mat-sidenav-container.td-layout-manage-list > .mat-drawer-content { -webkit-box-flex: 1; -ms-flex-positive: 1; flex-grow: 1; } :host /deep/ mat-sidenav-container.td-layout-manage-list > mat-sidenav { -webkit-box-sizing: border-box; box-sizing: border-box; display: -webkit-box; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -ms-flex-direction: column; flex-direction: column; } :host /deep/ mat-nav-list a[mat-list-item] .mat-list-item-content { font-size: 14px; } :host /deep/ .mat-toolbar { font-weight: 400; } /*# sourceMappingURL=layout-manage-list.component.css.map */ "],
        template: "<mat-sidenav-container fullscreen class=\"td-layout-manage-list\"> <mat-sidenav #sidenav position=\"start\" [mode]=\"mode\" [opened]=\"opened\" [disableClose]=\"disableClose\" [style.max-width]=\"sidenavWidth\" [style.min-width]=\"sidenavWidth\" class=\"md-whiteframe-z1\"> <ng-content select=\"mat-toolbar[td-sidenav-content]\"></ng-content> <div class=\"td-layout-manage-list-sidenav\" cdkScrollable> <ng-content select=\"[td-sidenav-content]\"></ng-content> </div> </mat-sidenav> <div class=\"td-layout-manage-list-main\"> <ng-content select=\"mat-toolbar\"></ng-content> <div class=\"td-layout-manage-list-content\" cdkScrollable> <ng-content></ng-content> </div> <ng-content select=\"td-layout-footer-inner\"></ng-content> </div> </mat-sidenav-container> ",
    })
], TdLayoutManageListComponent);
export { TdLayoutManageListComponent };
//# sourceMappingURL=layout-manage-list.component.js.map