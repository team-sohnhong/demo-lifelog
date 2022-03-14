"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogpostController = void 0;
const common_1 = require("@nestjs/common");
const blogpost_service_1 = require("./blogpost.service");
let BlogpostController = class BlogpostController {
    constructor(userService) {
        this.userService = userService;
    }
};
BlogpostController = __decorate([
    (0, common_1.Controller)('blogpost'),
    __metadata("design:paramtypes", [blogpost_service_1.BlogpostService])
], BlogpostController);
exports.BlogpostController = BlogpostController;
//# sourceMappingURL=blogpost.controller.js.map