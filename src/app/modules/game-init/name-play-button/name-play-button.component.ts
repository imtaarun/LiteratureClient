import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name-play-button',
  templateUrl: './name-play-button.component.html',
  styleUrls: ['./name-play-button.component.css']
})
export class NamePlayButtonComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.playForm = fb.group({
      'Name': [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z0-9\s]*$/)])]
    });
  }
  playForm: FormGroup;

  save() {
    this.router.navigate(['/room/' + this.playForm.value.Name]);
  }

  ngOnInit() {
  }

}
