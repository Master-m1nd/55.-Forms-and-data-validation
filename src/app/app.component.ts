import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup
  ngOnInit(){
    this.form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z0-9]+$`)]),
    email: new FormControl('', [Validators.required, Validators.pattern(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)], [this.checkEmail]),
    password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(`^[a-zA-Z0-9]+$`)]) 
    })  
  }

  submitReact(){
    if(this.form.valid){
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  submit(form:any) {
    if(form.valid){
      console.log(form.value);
    } else {
      form.control.markAllAsTouched()
    }
  }

  checkEmail(control: any): Promise<any> {
    const emails = ["Sincere@april.biz", "Shanna@melissa.tv", "Nathan@yesenia.net", "Julianne.OConner@kory.org", "Lucio_Hettinger@annie.ca", "Karley_Dach@jasper.info", "Telly.Hoeger@billy.biz", "Sherwood@rosamond.me", "Chaim_McDermott@dana.io", "Rey.Padberg@karina.biz"]
    return new Promise(resolve => {
      setTimeout(() => {
          if(emails.includes(control.value)){
            control.markAllAsTouched()
            resolve({uniqEmail: true})
          } else {
            resolve(null)
          }
        }, 2000)})}
}
