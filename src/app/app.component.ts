import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  showCaptch: boolean = false;
  @ViewChild('recaptcha', { static: true }) recaptchaElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.addRecaptchaScript();
  }
  renderReCaptch() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey': '6LePbq4UAAAAAPqwJU8u5g1Of1TIEMyoPpJQpyaD',
      'callback': (response) => {
        if (response != null) {
          alert('login successful')
        }
      }
    });
  }

  addRecaptchaScript() {
    window['grecaptchaCallback'] = () => {
      this.renderReCaptch();
    }
    (function (d, s, id, obj) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptch(); return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
  }

  showCaptcha() {
    this.showCaptch = true;
  }
}