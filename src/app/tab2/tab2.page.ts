import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public title: string;
  public name: string;

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');

    // translate.get('HELLO').subscribe((value) => {
    //   // value is our translated string
    //   this.title = value;
    // });
  }

  ionViewDidEnter(): void {
    console.log('ionViewDidEnter');
    this.translate.get('HELLO').subscribe((value) => (this.title = value));
    this.translate
      .get('data.name', { name_value: 'Marissa Mayer' })
      .subscribe((res: string) => {
        this.name = res;
      });
  }

  ionChange({ detail }) {
    this.translate.use(detail.value);
    this.translate.get('HELLO').subscribe((value) => (this.title = value));
    this.translate
      .get('data.name', { name_value: 'Marissa Mayer' })
      .subscribe((res: string) => {
        this.name = res;
      });
  }
}
