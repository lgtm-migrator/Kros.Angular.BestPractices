import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { companyReducer } from './state/company.reducer';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyEffects } from './state/company.effects';
import { SharedModule } from '../shared/shared.module';
import { CompnayShellComponent } from './compnay-shell/compnay-shell.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';
import { CompanyAddressComponent } from './company-address/company-address.component';

@NgModule({
    imports: [
        SharedModule,
        CompanyRoutingModule,
        StoreModule.forFeature(
            'company', companyReducer),
        EffectsModule.forFeature(
            [CompanyEffects]),
    ],
    declarations: [
        CompanyListComponent,
        CompanyItemComponent,
        CompanyDetailComponent,
        CompnayShellComponent,
        CompanySettingsComponent,
        CompanyAddressComponent
    ],
    entryComponents: [CompanyDetailComponent],
    exports: [CompanyDetailComponent]
})
export class CompanyModule { }
