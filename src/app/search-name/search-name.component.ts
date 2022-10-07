import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AgifyApiService } from '../services/agify-api-service.service';
import { Subscription } from 'rxjs';
import { NameData } from '../interfaces/agify-name-interface';

@Component({
  selector: 'search-name-component',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.scss']
})
export class SearchNameComponent implements OnInit, OnDestroy {

  public nameFormControl: FormControl;
  public nameDataSubscription: Subscription;
  public nameResult: NameData[] = [];
  public displayedColumns: string[] = ['age', 'count', 'name'];

  constructor(private agifyApiService: AgifyApiService) {
    this.nameFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.nameDataSubscription.unsubscribe();
  }

  public clearNameInput(): void {
    this.nameFormControl.reset();
  }

  public onSearchChange(): void {
    if(!this.nameFormControl.hasError('required')) {
      this.nameDataSubscription = this.agifyApiService.getNameData(this.nameFormControl.value).subscribe((response: NameData) => {
        this.nameResult = [response];
      });
    } else {
      this.nameResult = [];
    }
  }
}
