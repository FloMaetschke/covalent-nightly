(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/material/autocomplete'), require('@angular/material/chips'), require('@angular/cdk/portal'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/material/core'), require('rxjs'), require('rxjs/operators'), require('@covalent/core/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/core/chips', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/input', '@angular/material/icon', '@angular/material/autocomplete', '@angular/material/chips', '@angular/cdk/portal', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/material/core', 'rxjs', 'rxjs/operators', '@covalent/core/common'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.core = global.covalent.core || {}, global.covalent.core.chips = {}), global.ng.core, global.ng.forms, global.ng.common, global.ng.material.input, global.ng.material.icon, global.ng.material.autocomplete, global.ng.material.chips, global.ng.cdk.portal, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.ng.material.core, global.rxjs, global.rxjs.operators, global.covalent.core.common));
}(this, (function (exports, core, forms, common, input, icon, autocomplete, chips, portal, coercion, keycodes, core$1, rxjs, operators, common$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChipDirective = /** @class */ (function (_super) {
        __extends(TdChipDirective, _super);
        function TdChipDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdChipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-chip]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdChipDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdChipDirective;
    }(portal.TemplatePortalDirective));
    var TdAutocompleteOptionDirective = /** @class */ (function (_super) {
        __extends(TdAutocompleteOptionDirective, _super);
        function TdAutocompleteOptionDirective(templateRef, viewContainerRef) {
            return _super.call(this, templateRef, viewContainerRef) || this;
        }
        TdAutocompleteOptionDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[td-autocomplete-option]ng-template',
                    },] }
        ];
        /** @nocollapse */
        TdAutocompleteOptionDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: core.ViewContainerRef }
        ]; };
        return TdAutocompleteOptionDirective;
    }(portal.TemplatePortalDirective));
    var TdChipsBase = /** @class */ (function () {
        function TdChipsBase(_changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
        }
        return TdChipsBase;
    }());
    if (false) {
        /** @type {?} */
        TdChipsBase.prototype._changeDetectorRef;
    }
    /* tslint:disable-next-line */
    /** @type {?} */
    var _TdChipsMixinBase = common$1.mixinControlValueAccessor(common$1.mixinDisabled(TdChipsBase), []);
    var TdChipsComponent = /** @class */ (function (_super) {
        __extends(TdChipsComponent, _super);
        function TdChipsComponent(_elementRef, _renderer, _document, _changeDetectorRef) {
            var _this = _super.call(this, _changeDetectorRef) || this;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this._document = _document;
            _this._outsideClickSubs = rxjs.Subscription.EMPTY;
            _this._inputValueChangesSubs = rxjs.Subscription.EMPTY;
            _this._isMousedown = false;
            _this._length = 0;
            _this._stacked = false;
            _this._requireMatch = false;
            _this._color = 'primary';
            _this._inputPosition = 'after';
            _this._chipAddition = true;
            _this._chipRemoval = true;
            _this._focused = false;
            _this._required = false;
            _this._tabIndex = 0;
            _this._touchendDebounce = 100;
            _this._internalClick = false;
            _this._internalActivateOption = false;
            /**
             * FormControl for the matInput element.
             */
            _this.inputControl = new forms.FormControl();
            /**
             * debounce?: number
             * Debounce timeout between keypresses. Defaults to 200.
             */
            _this.debounce = 200;
            /**
             * add?: function
             * Method to be executed when a chip is added.
             * Sends chip value as event.
             */
            _this.add = new core.EventEmitter();
            /**
             * remove?: function
             * Method to be executed when a chip is removed.
             * Sends chip value as event.
             */
            _this.remove = new core.EventEmitter();
            /**
             * inputChange?: function
             * Method to be executed when the value in the autocomplete input changes.
             * Sends string value as event.
             */
            _this.inputChange = new core.EventEmitter();
            /**
             * chipFocus?: function
             * Method to be executed when a chip is focused.
             * Sends chip value as event.
             */
            _this.chipFocus = new core.EventEmitter();
            /**
             * blur?: function
             * Method to be executed when a chip is blurred.
             * Sends chip value as event.
             */
            _this.chipBlur = new core.EventEmitter();
            /**
             * compareWith? function
             * Function used to check whether a chip value already exists.
             * Defaults to strict equality comparison ===
             */
            _this.compareWith = (/**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */
            function (o1, o2) {
                return o1 === o2;
            });
            _this._renderer.addClass(_this._elementRef.nativeElement, 'mat-' + _this._color);
            return _this;
        }
        Object.defineProperty(TdChipsComponent.prototype, "focused", {
            /**
             * Flag that is true when autocomplete is focused.
             */
            get: /**
             * Flag that is true when autocomplete is focused.
             * @return {?}
             */
            function () {
                return this._focused;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "items", {
            get: /**
             * @return {?}
             */
            function () {
                return this._items;
            },
            /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             */
            set: /**
             * items?: any[]
             * Renders the `mat-autocomplete` with the provided list to display as options.
             * @param {?} items
             * @return {?}
             */
            function (items) {
                this._items = items;
                this._setFirstOptionActive();
                this._changeDetectorRef.markForCheck();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "stacked", {
            get: /**
             * @return {?}
             */
            function () {
                return this._stacked;
            },
            /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             */
            set: /**
             * stacked?: boolean
             * Set stacked or horizontal chips depending on value.
             * Defaults to false.
             * @param {?} stacked
             * @return {?}
             */
            function (stacked) {
                this._stacked = coercion.coerceBooleanProperty(stacked);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "inputPosition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._inputPosition;
            },
            /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             */
            set: /**
             * inputPosition?: 'before' | 'after'
             * Set input position before or after the chips.
             * Defaults to 'after'.
             * @param {?} inputPosition
             * @return {?}
             */
            function (inputPosition) {
                this._inputPosition = inputPosition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "requireMatch", {
            get: /**
             * @return {?}
             */
            function () {
                return this._requireMatch;
            },
            /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             */
            set: /**
             * requireMatch?: boolean
             * Blocks custom inputs and only allows selections from the autocomplete list.
             * @param {?} requireMatch
             * @return {?}
             */
            function (requireMatch) {
                this._requireMatch = coercion.coerceBooleanProperty(requireMatch);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "required", {
            get: /**
             * @return {?}
             */
            function () {
                return this._required;
            },
            /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             */
            set: /**
             * required?: boolean
             * Value is set to true if at least one chip is needed
             * Defaults to false
             * @param {?} required
             * @return {?}
             */
            function (required) {
                this._required = coercion.coerceBooleanProperty(required);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipAddition", {
            get: /**
             * @return {?}
             */
            function () {
                return this._chipAddition;
            },
            /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             */
            set: /**
             * chipAddition?: boolean
             * Disables the ability to add chips. When setting disabled as true, this will be overriden.
             * Defaults to true.
             * @param {?} chipAddition
             * @return {?}
             */
            function (chipAddition) {
                this._chipAddition = chipAddition;
                this._toggleInput();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canAddChip", {
            /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             */
            get: /**
             * Checks if not in disabled state and if chipAddition is set to 'true'
             * States if a chip can be added and if the input is available
             * @return {?}
             */
            function () {
                return this.chipAddition && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "chipRemoval", {
            get: /**
             * @return {?}
             */
            function () {
                return this._chipRemoval;
            },
            /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             */
            set: /**
             * chipRemoval?: boolean
             * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
             * When setting disabled as true, this will be overriden to false.
             * @param {?} chipRemoval
             * @return {?}
             */
            function (chipRemoval) {
                this._chipRemoval = chipRemoval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "canRemoveChip", {
            /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             */
            get: /**
             * Checks if not in disabled state and if chipRemoval is set to 'true'
             * States if a chip can be removed
             * @return {?}
             */
            function () {
                return this.chipRemoval && !this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "displayPlaceHolder", {
            /**
             * returns the display placeholder
             */
            get: /**
             * returns the display placeholder
             * @return {?}
             */
            function () {
                if (!this.canAddChip) {
                    return '';
                }
                return this._required ? this.placeholder + " *" : this.placeholder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () {
                return this._color;
            },
            /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             */
            set: /**
             * color?: 'primary' | 'accent' | 'warn'
             * Sets the color for the input and focus/selected state of the chips.
             * Defaults to 'primary'
             * @param {?} color
             * @return {?}
             */
            function (color) {
                if (color) {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
                    this._color = color;
                    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TdChipsComponent.prototype, "tabIndex", {
            /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             */
            get: /**
             * Hostbinding to set the a11y of the TdChipsComponent depending on its state
             * @return {?}
             */
            function () {
                return this.disabled ? -1 : this._tabIndex;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Listens to host focus event to act on it
         */
        /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.focusListener = /**
         * Listens to host focus event to act on it
         * @param {?} event
         * @return {?}
         */
        function (event) {
            // should only focus if its not via mousedown to prevent clashing with autocomplete
            if (!this._isMousedown) {
                this.focus();
            }
            event.preventDefault();
        };
        /**
         * Listens to host mousedown event to act on it
         */
        /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.mousedownListener = /**
         * Listens to host mousedown event to act on it
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            // sets a flag to know if there was a mousedown and then it returns it back to false
            this._isMousedown = true;
            rxjs.timer()
                .toPromise()
                .then((/**
             * @return {?}
             */
            function () {
                _this._isMousedown = false;
            }));
        };
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         */
        /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.clickListener = /**
         * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
         * doesnt close automatically.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            /** @type {?} */
            var clickTarget = (/** @type {?} */ (event.target));
            if (clickTarget === this._elementRef.nativeElement || clickTarget.className.indexOf('td-chips-wrapper') > -1) {
                this.focus();
                event.preventDefault();
                event.stopPropagation();
            }
        };
        /**
         * Listens to host keydown event to act on it depending on the keypress
         */
        /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype.keydownListener = /**
         * Listens to host keydown event to act on it depending on the keypress
         * @param {?} event
         * @return {?}
         */
        function (event) {
            var _this = this;
            switch (event.keyCode) {
                case keycodes.TAB:
                    // if tabing out, then unfocus the component
                    rxjs.timer()
                        .toPromise()
                        .then((/**
                     * @return {?}
                     */
                    function () {
                        _this.removeFocusedState();
                    }));
                    break;
                case keycodes.ESCAPE:
                    if (this._inputChild.focused) {
                        this._nativeInput.nativeElement.blur();
                        this.removeFocusedState();
                        this._closeAutocomplete();
                    }
                    else {
                        this.focus();
                    }
                    break;
                default:
                // default
            }
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this._inputValueChangesSubs = this.inputControl.valueChanges
                .pipe(operators.debounceTime(this.debounce))
                .subscribe((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.inputChange.emit(value ? value : '');
            }));
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._watchOutsideClick();
            this._changeDetectorRef.markForCheck();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngDoCheck = /**
         * @return {?}
         */
        function () {
            // Throw onChange event only if array changes size.
            if (this.value && this.value.length !== this._length) {
                this._length = this.value.length;
                this.onChange(this.value);
            }
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._outsideClickSubs.unsubscribe();
            this._inputValueChangesSubs.unsubscribe();
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._setInternalClick = /**
         * @return {?}
         */
        function () {
            this._internalClick = true;
        };
        /** Method executed when the disabled value changes */
        /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        TdChipsComponent.prototype.onDisabledChange = /**
         * Method executed when the disabled value changes
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._toggleInput();
        };
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        TdChipsComponent.prototype._handleAddChip = /**
         * Method that is executed when trying to create a new chip from the autocomplete.
         * It check if [requireMatch] is enabled, and tries to add the first active option
         * else if just adds the value thats on the input
         * returns 'true' if successful, 'false' if it fails.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var value;
            if (this.requireMatch) {
                /** @type {?} */
                var selectedOptions = this._options.toArray().filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option.active;
                }));
                if (selectedOptions.length > 0) {
                    value = selectedOptions[0].value;
                    selectedOptions[0].setInactiveStyles();
                }
                if (!value) {
                    return false;
                }
            }
            else {
                // if there is a selection, then use that
                // else use the input value as chip
                if (this._autocompleteTrigger.activeOption) {
                    value = this._autocompleteTrigger.activeOption.value;
                    this._autocompleteTrigger.activeOption.setInactiveStyles();
                }
                else {
                    value = this._inputChild.value;
                    if (value.trim() === '') {
                        return false;
                    }
                }
            }
            return this.addChip(value);
        };
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype.addChip = /**
         * Method thats exectuted when trying to add a value as chip
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /**
             * add a debounce ms delay when reopening the autocomplete to give it time
             * to rerender the next list and at the correct spot
             */
            var _this = this;
            this._closeAutocomplete();
            rxjs.timer(this.debounce)
                .toPromise()
                .then((/**
             * @return {?}
             */
            function () {
                _this.setFocusedState();
                _this._setFirstOptionActive();
                _this._openAutocomplete();
            }));
            this.inputControl.setValue('');
            // check if value is already part of the model
            if (this.value.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return _this.compareWith(item, value); })) > -1) {
                return false;
            }
            this.value.push(value);
            this.add.emit(value);
            this.onChange(this.value);
            this._changeDetectorRef.markForCheck();
            return true;
        };
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         */
        /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype.removeChip = /**
         * Method that is executed when trying to remove a chip.
         * returns 'true' if successful, 'false' if it fails.
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** @type {?} */
            var removedValues = this.value.splice(index, 1);
            if (removedValues.length === 0) {
                return false;
            }
            /**
             * Checks if deleting last single chip, to focus input afterwards
             * Else check if its not the last chip of the list to focus the next one.
             */
            if (index === this._totalChips - 1 && index === 0) {
                this._inputChild.focus();
            }
            else if (index < this._totalChips - 1) {
                this._focusChip(index + 1);
            }
            else if (index > 0) {
                this._focusChip(index - 1);
            }
            this.remove.emit(removedValues[0]);
            this.onChange(this.value);
            this.inputControl.setValue('');
            this._changeDetectorRef.markForCheck();
            return true;
        };
        /**
         * Sets blur of chip and sends out event
         */
        /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipBlur = /**
         * Sets blur of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        function (event, value) {
            this.chipBlur.emit(value);
        };
        /**
         * Sets focus of chip and sends out event
         */
        /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        TdChipsComponent.prototype._handleChipFocus = /**
         * Sets focus of chip and sends out event
         * @param {?} event
         * @param {?} value
         * @return {?}
         */
        function (event, value) {
            this.setFocusedState();
            this.chipFocus.emit(value);
        };
        /**
         * @return {?}
         */
        TdChipsComponent.prototype._handleFocus = /**
         * @return {?}
         */
        function () {
            this.setFocusedState();
            this._setFirstOptionActive();
            return true;
        };
        /**
         * Sets focus state of the component
         */
        /**
         * Sets focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.setFocusedState = /**
         * Sets focus state of the component
         * @return {?}
         */
        function () {
            if (!this.disabled) {
                this._focused = true;
                this._tabIndex = -1;
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Removes focus state of the component
         */
        /**
         * Removes focus state of the component
         * @return {?}
         */
        TdChipsComponent.prototype.removeFocusedState = /**
         * Removes focus state of the component
         * @return {?}
         */
        function () {
            this._focused = false;
            this._tabIndex = 0;
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         */
        /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        TdChipsComponent.prototype.focus = /**
         * Programmatically focus the input or first chip. Since its the component entry point
         * depending if a user can add or remove chips
         * @return {?}
         */
        function () {
            if (this.canAddChip) {
                this._inputChild.focus();
            }
            else if (!this.disabled) {
                this._focusFirstChip();
            }
        };
        /**
         * Passes relevant input key presses.
         */
        /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        TdChipsComponent.prototype._inputKeydown = /**
         * Passes relevant input key presses.
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (event.keyCode) {
                case keycodes.UP_ARROW:
                    /**
                     * Since the first item is highlighted on [requireMatch], we need to inactivate it
                     * when pressing the up key
                     */
                    if (this.requireMatch) {
                        /** @type {?} */
                        var length_1 = this._options.length;
                        if (length_1 > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
                            this._options.toArray()[0].setInactiveStyles();
                            this._internalActivateOption = false;
                            // prevent default window scrolling
                            event.preventDefault();
                        }
                    }
                    break;
                case keycodes.LEFT_ARROW:
                case keycodes.DELETE:
                case keycodes.BACKSPACE:
                    this._closeAutocomplete();
                    /** Check to see if input is empty when pressing left arrow to move to the last chip */
                    if (!this._inputChild.value) {
                        this._focusLastChip();
                        // prevent default window scrolling
                        event.preventDefault();
                    }
                    break;
                case keycodes.RIGHT_ARROW:
                    this._closeAutocomplete();
                    /** Check to see if input is empty when pressing right arrow to move to the first chip */
                    if (!this._inputChild.value) {
                        this._focusFirstChip();
                        // prevent default window scrolling
                        event.preventDefault();
                    }
                    break;
                default:
                // default
            }
        };
        /**
         * Passes relevant chip key presses.
         */
        /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._chipKeydown = /**
         * Passes relevant chip key presses.
         * @param {?} event
         * @param {?} index
         * @return {?}
         */
        function (event, index) {
            switch (event.keyCode) {
                case keycodes.DELETE:
                case keycodes.BACKSPACE:
                    /** Check to see if we can delete a chip */
                    if (this.canRemoveChip) {
                        this.removeChip(index);
                    }
                    break;
                case keycodes.UP_ARROW:
                case keycodes.LEFT_ARROW:
                    /**
                     * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
                     * Also check if input should be focused
                     */
                    if (index === 0) {
                        // only try to target input if pressing left
                        if (this.canAddChip && event.keyCode === keycodes.LEFT_ARROW) {
                            this._inputChild.focus();
                        }
                        else {
                            this._focusLastChip();
                        }
                    }
                    else if (index > 0) {
                        this._focusChip(index - 1);
                    }
                    // prevent default window scrolling
                    event.preventDefault();
                    break;
                case keycodes.DOWN_ARROW:
                case keycodes.RIGHT_ARROW:
                    /**
                     * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
                     * Also check if input should be focused
                     */
                    if (index === this._totalChips - 1) {
                        // only try to target input if pressing right
                        if (this.canAddChip && event.keyCode === keycodes.RIGHT_ARROW) {
                            this._inputChild.focus();
                        }
                        else {
                            this._focusFirstChip();
                        }
                    }
                    else if (index < this._totalChips - 1) {
                        this._focusChip(index + 1);
                    }
                    // prevent default window scrolling
                    event.preventDefault();
                    break;
                default:
                // default
            }
        };
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         */
        /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        TdChipsComponent.prototype._removeInputDisplay = /**
         * Method to remove from display the value added from the autocomplete since it goes directly as chip.
         * @return {?}
         */
        function () {
            return '';
        };
        /**
         * Method to open the autocomplete manually if its not already opened
         */
        /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        TdChipsComponent.prototype._openAutocomplete = /**
         * Method to open the autocomplete manually if its not already opened
         * @return {?}
         */
        function () {
            if (!this._autocompleteTrigger.panelOpen) {
                this._autocompleteTrigger.openPanel();
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * Method to close the autocomplete manually if its not already closed
         */
        /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        TdChipsComponent.prototype._closeAutocomplete = /**
         * Method to close the autocomplete manually if its not already closed
         * @return {?}
         */
        function () {
            if (this._autocompleteTrigger.panelOpen) {
                this._autocompleteTrigger.closePanel();
                this._changeDetectorRef.markForCheck();
            }
        };
        Object.defineProperty(TdChipsComponent.prototype, "_totalChips", {
            /**
             * Get total of chips
             */
            get: /**
             * Get total of chips
             * @return {?}
             */
            function () {
                /** @type {?} */
                var chips = this._chipsChildren.toArray();
                return chips.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Method to focus a desired chip by index
         */
        /**
         * Method to focus a desired chip by index
         * @private
         * @param {?} index
         * @return {?}
         */
        TdChipsComponent.prototype._focusChip = /**
         * Method to focus a desired chip by index
         * @private
         * @param {?} index
         * @return {?}
         */
        function (index) {
            /** check to see if index exists in the array before focusing */
            if (index > -1 && this._totalChips > index) {
                this._chipsChildren.toArray()[index].focus();
            }
        };
        /** Method to focus first chip */
        /**
         * Method to focus first chip
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._focusFirstChip = /**
         * Method to focus first chip
         * @private
         * @return {?}
         */
        function () {
            this._focusChip(0);
        };
        /** Method to focus last chip */
        /**
         * Method to focus last chip
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._focusLastChip = /**
         * Method to focus last chip
         * @private
         * @return {?}
         */
        function () {
            this._focusChip(this._totalChips - 1);
        };
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         */
        /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._toggleInput = /**
         * Method to toggle the disable state of input
         * Checks if not in disabled state and if chipAddition is set to 'true'
         * @private
         * @return {?}
         */
        function () {
            if (this.canAddChip) {
                this.inputControl.enable();
            }
            else {
                this.inputControl.disable();
            }
            this._changeDetectorRef.markForCheck();
        };
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         */
        /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._setFirstOptionActive = /**
         * Sets first option as active to let the user know which one will be added when pressing enter
         * Only if [requireMatch] has been set
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this.requireMatch) {
                // need to use a timer here to wait until the autocomplete has been opened (end of queue)
                rxjs.timer()
                    .toPromise()
                    .then((/**
                 * @return {?}
                 */
                function () {
                    if (_this.focused && _this._options && _this._options.length > 0) {
                        // clean up of previously active options
                        _this._options.toArray().forEach((/**
                         * @param {?} option
                         * @return {?}
                         */
                        function (option) {
                            option.setInactiveStyles();
                        }));
                        // set the first one as active
                        _this._options.toArray()[0].setActiveStyles();
                        _this._internalActivateOption = true;
                        _this._changeDetectorRef.markForCheck();
                    }
                }));
            }
        };
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         */
        /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @private
         * @return {?}
         */
        TdChipsComponent.prototype._watchOutsideClick = /**
         * Watches clicks outside of the component to remove the focus
         * The autocomplete panel is considered inside the component so we
         * need to use a flag to find out when its clicked.
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            if (this._document) {
                this._outsideClickSubs = rxjs.merge(rxjs.fromEvent(this._document, 'click'), rxjs.fromEvent(this._document, 'touchend'))
                    .pipe(operators.debounceTime(this._touchendDebounce), operators.filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    /** @type {?} */
                    var clickTarget = (/** @type {?} */ (event.target));
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this._internalClick = false;
                    }));
                    return (_this.focused &&
                        clickTarget !== _this._elementRef.nativeElement &&
                        !_this._elementRef.nativeElement.contains(clickTarget) &&
                        !_this._internalClick);
                })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    if (_this.focused) {
                        _this._autocompleteTrigger.closePanel();
                        _this.removeFocusedState();
                        _this.onTouched();
                        _this._changeDetectorRef.markForCheck();
                    }
                }));
            }
            return undefined;
        };
        TdChipsComponent.decorators = [
            { type: core.Component, args: [{
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdChipsComponent; })),
                                multi: true,
                            },
                        ],
                        selector: 'td-chips',
                        inputs: ['disabled', 'value'],
                        template: "<div\n  class=\"td-chips-wrapper\"\n  [class.td-chips-stacked]=\"stacked\"\n  [class.td-chips-input-before-position]=\"inputPosition === 'before'\"\n>\n  <ng-template let-chip let-first=\"first\" let-index=\"index\" ngFor [ngForOf]=\"value\">\n    <mat-basic-chip\n      [class.td-chip-disabled]=\"disabled\"\n      [class.td-chip-after-pad]=\"!canRemoveChip\"\n      [disableRipple]=\"true\"\n      [color]=\"color\"\n      (keydown)=\"_chipKeydown($event, index)\"\n      (blur)=\"_handleChipBlur($event, chip)\"\n      (focus)=\"_handleChipFocus($event, chip)\"\n    >\n      <div class=\"td-chip\" [class.td-chip-stacked]=\"stacked\">\n        <span class=\"td-chip-content\">\n          <span *ngIf=\"!_chipTemplate?.templateRef\">{{ chip }}</span>\n          <ng-template\n            *ngIf=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutlet]=\"_chipTemplate?.templateRef\"\n            [ngTemplateOutletContext]=\"{ chip: chip }\"\n          ></ng-template>\n        </span>\n        <mat-icon *ngIf=\"canRemoveChip\" class=\"td-chip-removal\" (click)=\"_internalClick = removeChip(index)\">\n          cancel\n        </mat-icon>\n      </div>\n    </mat-basic-chip>\n  </ng-template>\n  <mat-form-field\n    floatLabel=\"never\"\n    class=\"td-chips-form-field\"\n    [style.width.px]=\"canAddChip ? null : 0\"\n    [style.height.px]=\"canAddChip ? null : 0\"\n    [color]=\"color\"\n  >\n    <input\n      matInput\n      #input\n      [tabIndex]=\"-1\"\n      [matAutocomplete]=\"autocomplete\"\n      [formControl]=\"inputControl\"\n      [placeholder]=\"displayPlaceHolder\"\n      (keydown)=\"_inputKeydown($event)\"\n      (keyup.enter)=\"_handleAddChip()\"\n      (focus)=\"_handleFocus()\"\n    />\n  </mat-form-field>\n  <mat-autocomplete\n    #autocomplete=\"matAutocomplete\"\n    [displayWith]=\"_removeInputDisplay\"\n    (optionSelected)=\"addChip($event.option.value)\"\n  >\n    <ng-template let-item let-first=\"first\" ngFor [ngForOf]=\"items\">\n      <mat-option (click)=\"_setInternalClick()\" [value]=\"item\">\n        <span *ngIf=\"!_autocompleteOptionTemplate?.templateRef\">{{ item }}</span>\n        <ng-template\n          *ngIf=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutlet]=\"_autocompleteOptionTemplate?.templateRef\"\n          [ngTemplateOutletContext]=\"{ option: item }\"\n        ></ng-template>\n      </mat-option>\n    </ng-template>\n  </mat-autocomplete>\n</div>\n<div *ngIf=\"chipAddition\" class=\"mat-form-field-underline\" [class.mat-disabled]=\"disabled\">\n  <span class=\"mat-form-field-ripple\" [class.mat-focused]=\"focused\"></span>\n</div>\n<ng-content></ng-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{display:block;padding:0 5px;min-height:48px}:host .td-chips-wrapper{min-height:42px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host .td-chips-wrapper.td-chips-stacked .mat-basic-chip,:host .td-chips-wrapper.td-chips-stacked .td-chips-form-field{width:100%}:host .td-chips-wrapper.td-chips-input-before-position .td-chips-form-field{-ms-flex-order:-1;order:-1}:host .td-chip,:host .td-chip>.td-chip-content{box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;max-width:100%;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:start;justify-content:flex-start;min-width:0}:host .td-chip.td-chip-stacked,:host .td-chip>.td-chip-content.td-chip-stacked{-ms-flex-pack:justify;justify-content:space-between}:host ::ng-deep .mat-form-field-wrapper{padding-bottom:2px}:host ::ng-deep .mat-basic-chip{display:inline-block;cursor:default;border-radius:16px;margin:8px 8px 0 0;box-sizing:border-box;max-width:100%;position:relative}html[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip{margin:8px 0 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip{min-height:32px;line-height:32px;font-size:13px;padding:0 0 0 12px}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip{padding:0 12px 0 0;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{display:inline-block;-ms-flex-order:-20;order:-20;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;height:32px;width:32px;margin:0 8px 0 -12px;border-radius:50%;-ms-flex:0 0 auto;flex:0 0 auto;box-sizing:border-box}html[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar]{margin:0 -12px 0 8px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip .td-chip [td-chip-avatar] bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 12px 0 0}html[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}body[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}[dir=rtl] :host ::ng-deep .mat-basic-chip.td-chip-after-pad{padding:0 0 0 12px;unicode-bidi:embed}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=rtl]{direction:rtl;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip.td-chip-after-pad bdo[dir=ltr]{direction:ltr;unicode-bidi:bidi-override}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal{margin:0 4px;font-size:21px;line-height:22px}:host ::ng-deep .mat-basic-chip mat-icon.td-chip-removal:hover{cursor:pointer}:host ::ng-deep .td-chips-stacked .mat-basic-chip{margin:4px 0}:host ::ng-deep .td-chips-stacked .mat-basic-chip:first-of-type{margin:8px 0 4px}:host ::ng-deep .td-chips-stacked .mat-basic-chip:last-of-type{margin:4px 0 8px}:host .mat-form-field-underline{position:relative;height:1px;width:100%;bottom:0}:host .mat-form-field-underline.mat-disabled{background-position:0;bottom:-4px;background-color:transparent}:host .mat-form-field-underline .mat-form-field-ripple{position:absolute;height:2px;top:0;width:100%;-ms-transform-origin:50%;transform-origin:50%;-ms-transform:scaleX(.5);transform:scaleX(.5);visibility:hidden;opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}:host .mat-form-field-underline .mat-form-field-ripple.mat-focused{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host.ng-invalid .mat-form-field-underline .mat-form-field-ripple{visibility:visible;opacity:1;-ms-transform:scaleX(1);transform:scaleX(1);transition:transform 150ms linear,background-color .3s cubic-bezier(.55,0,.55,.2)}:host ::ng-deep mat-form-field .mat-form-field-underline{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        TdChipsComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: core.ChangeDetectorRef }
        ]; };
        TdChipsComponent.propDecorators = {
            _nativeInput: [{ type: core.ViewChild, args: ['input', { static: true },] }],
            _inputChild: [{ type: core.ViewChild, args: [input.MatInput, { static: true },] }],
            _autocompleteTrigger: [{ type: core.ViewChild, args: [autocomplete.MatAutocompleteTrigger, { static: true },] }],
            _chipsChildren: [{ type: core.ViewChildren, args: [chips.MatChip,] }],
            _chipTemplate: [{ type: core.ContentChild, args: [TdChipDirective,] }],
            _autocompleteOptionTemplate: [{ type: core.ContentChild, args: [TdAutocompleteOptionDirective,] }],
            _options: [{ type: core.ViewChildren, args: [core$1.MatOption,] }],
            items: [{ type: core.Input, args: ['items',] }],
            stacked: [{ type: core.Input, args: ['stacked',] }],
            inputPosition: [{ type: core.Input, args: ['inputPosition',] }],
            requireMatch: [{ type: core.Input, args: ['requireMatch',] }],
            required: [{ type: core.Input, args: ['required',] }],
            chipAddition: [{ type: core.Input, args: ['chipAddition',] }],
            chipRemoval: [{ type: core.Input, args: ['chipRemoval',] }],
            placeholder: [{ type: core.Input }],
            debounce: [{ type: core.Input }],
            color: [{ type: core.Input, args: ['color',] }],
            add: [{ type: core.Output }],
            remove: [{ type: core.Output }],
            inputChange: [{ type: core.Output }],
            chipFocus: [{ type: core.Output }],
            chipBlur: [{ type: core.Output }],
            tabIndex: [{ type: core.HostBinding, args: ['attr.tabindex',] }],
            compareWith: [{ type: core.Input }],
            focusListener: [{ type: core.HostListener, args: ['focus', ['$event'],] }],
            mousedownListener: [{ type: core.HostListener, args: ['mousedown', ['$event'],] }],
            clickListener: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            keydownListener: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return TdChipsComponent;
    }(_TdChipsMixinBase));
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._outsideClickSubs;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._inputValueChangesSubs;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._isMousedown;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._items;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._length;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._stacked;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._requireMatch;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._color;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._inputPosition;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._chipAddition;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._chipRemoval;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._focused;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._required;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._tabIndex;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._touchendDebounce;
        /** @type {?} */
        TdChipsComponent.prototype._internalClick;
        /** @type {?} */
        TdChipsComponent.prototype._internalActivateOption;
        /** @type {?} */
        TdChipsComponent.prototype._nativeInput;
        /** @type {?} */
        TdChipsComponent.prototype._inputChild;
        /** @type {?} */
        TdChipsComponent.prototype._autocompleteTrigger;
        /** @type {?} */
        TdChipsComponent.prototype._chipsChildren;
        /** @type {?} */
        TdChipsComponent.prototype._chipTemplate;
        /** @type {?} */
        TdChipsComponent.prototype._autocompleteOptionTemplate;
        /** @type {?} */
        TdChipsComponent.prototype._options;
        /**
         * FormControl for the matInput element.
         * @type {?}
         */
        TdChipsComponent.prototype.inputControl;
        /**
         * placeholder?: string
         * Placeholder for the autocomplete input.
         * @type {?}
         */
        TdChipsComponent.prototype.placeholder;
        /**
         * debounce?: number
         * Debounce timeout between keypresses. Defaults to 200.
         * @type {?}
         */
        TdChipsComponent.prototype.debounce;
        /**
         * add?: function
         * Method to be executed when a chip is added.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.add;
        /**
         * remove?: function
         * Method to be executed when a chip is removed.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.remove;
        /**
         * inputChange?: function
         * Method to be executed when the value in the autocomplete input changes.
         * Sends string value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.inputChange;
        /**
         * chipFocus?: function
         * Method to be executed when a chip is focused.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.chipFocus;
        /**
         * blur?: function
         * Method to be executed when a chip is blurred.
         * Sends chip value as event.
         * @type {?}
         */
        TdChipsComponent.prototype.chipBlur;
        /**
         * compareWith? function
         * Function used to check whether a chip value already exists.
         * Defaults to strict equality comparison ===
         * @type {?}
         */
        TdChipsComponent.prototype.compareWith;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._renderer;
        /**
         * @type {?}
         * @private
         */
        TdChipsComponent.prototype._document;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CovalentChipsModule = /** @class */ (function () {
        function CovalentChipsModule() {
        }
        CovalentChipsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [forms.ReactiveFormsModule, common.CommonModule, input.MatInputModule, icon.MatIconModule, chips.MatChipsModule, autocomplete.MatAutocompleteModule],
                        declarations: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                        exports: [TdChipsComponent, TdChipDirective, TdAutocompleteOptionDirective],
                    },] }
        ];
        return CovalentChipsModule;
    }());

    exports.CovalentChipsModule = CovalentChipsModule;
    exports.TdAutocompleteOptionDirective = TdAutocompleteOptionDirective;
    exports.TdChipDirective = TdChipDirective;
    exports.TdChipsBase = TdChipsBase;
    exports.TdChipsComponent = TdChipsComponent;
    exports._TdChipsMixinBase = _TdChipsMixinBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-core-chips.umd.js.map
