import { Component, OnInit, Input } from "@angular/core";
import { CompanyListComponent } from "../company-list/company-list.component";
import { CompanyItem } from "../models/company.model";
import { CompanyState } from "../state/company.state";
import { Store } from "@ngrx/store";
import * as companyActions from "../state/company.actions";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CompanyDetailComponent } from "../company-detail/company-detail.component";
import { Router } from "@angular/router";

@Component({
    selector: "kros-company-item",
    templateUrl: "./company-item.component.html",
    styleUrls: ["./company-item.component.scss"]
})
export class CompanyItemComponent implements OnInit {
    constructor(
        private store: Store<CompanyState>,
        private modalService: NgbModal,
        private router: Router
    ) {}

    @Input() item: CompanyItem;

    ngOnInit() {}
    deleteCompany(id: number) {
        this.store.dispatch(new companyActions.Delete(id));
    }

    editCompany(id: number) {
        // const modalRef = this.modalService.open(CompanyDetailComponent, {
        //     size: "lg",
        //     centered: true
        // });
        // modalRef.componentInstance.companyId = id;
        console.log("nieco");
        console.log(this.router.navigate(["settings", id]));
        this.router.navigate(["settings/{id}"]);
        // this.router.navigateByUrl("/settings/");
    }
    selectCompany(id: number) {
        this.store.dispatch(new companyActions.SetCurrentCompany(id));
    }
}
