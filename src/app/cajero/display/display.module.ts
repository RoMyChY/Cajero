import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DisplayRoutingModule } from "./display-routing.module";
import { DisplayComponent } from "./display.component";

@NgModule({
    imports: [
        DisplayRoutingModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        DisplayComponent,
    ],
    exports: [
    ]
})
export class HappyTradingModule {}
