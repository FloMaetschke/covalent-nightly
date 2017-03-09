var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TdChipComponent = (function () {
    function TdChipComponent() {
    }
    return TdChipComponent;
}());
TdChipComponent = __decorate([
    Component({
        selector: 'td-chip',
        styles: ["/** * Mixin that creates a new stacking context. * see https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context */ :host { display: block; float: left; } html[dir=rtl] :host { float: right; unicode-bidi: embed; } body[dir=rtl] :host { float: right; unicode-bidi: embed; } [dir=rtl] :host { float: right; unicode-bidi: embed; } :host bdo[dir=rtl] { direction: rtl; unicode-bidi: bidi-override; } :host bdo[dir=ltr] { direction: ltr; unicode-bidi: bidi-override; } "],
        template: "<span class=\"td-chip\"> <ng-content></ng-content> </span>",
    })
], TdChipComponent);
export { TdChipComponent };
//# sourceMappingURL=chip.component.js.map