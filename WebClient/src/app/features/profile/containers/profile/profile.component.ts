import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from 'src/app/shared/services';
import { Profile } from 'src/app/shared/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isFormChangedAndValid: boolean;
  isEditMode: boolean;
  form: FormGroup;
  imgURL: any;
  initialValue: Profile;
  photoSelected: boolean;
  isRoSelected: boolean;

  constructor(
    private readonly profileService: ProfileService,
    private readonly router: Router,
    private readonly translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.profileService.getProfile().subscribe(data => {
      this.isEditMode = true;
      this.form.patchValue(data);
      this.imgURL = data.image ? atob(data.image) : null;
      this.photoSelected = this.imgURL !== null;
      this.initialValue = {
        name: data.name,
        image: this.imgURL
      };
    }, () => {
      this.isEditMode = false;
    });

    this.isRoSelected = this.translateService.currentLang === 'ro';

    this.form.valueChanges.subscribe(() => {
      if (this.initialValue) {
        this.isFormChangedAndValid = this.form.valid && this.form.value !== this.initialValue;
      } else {
        this.isFormChangedAndValid = this.form.valid && !this.form.pristine;
      }
    });
  }

  changeLanguage(event: MatButtonToggleChange): void {
    this.translateService.use(event.value);
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.profileService.update(this.form.value).subscribe(() => {
        this.profileService.setHeaderData(this.form.value);
        this.goBack();
      });
    } else {
      this.profileService.add(this.form.value).subscribe(() => {
        this.profileService.setHeaderData(this.form.value);
        this.goBack();
      })
    }
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.photoSelected = true;
      this.form.get('image').setValue(btoa(this.imgURL));
    }
  }

  removePhoto(): void {
    this.imgURL = null;
    this.photoSelected = false;
    this.form.get('image').setValue(null);
  }

  goBack(): void {
    this.router.navigateByUrl('/dashboard');
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      image: new FormControl(null)
    })
  }
}