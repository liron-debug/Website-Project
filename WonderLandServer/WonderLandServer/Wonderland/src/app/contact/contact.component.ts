import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  subscription: Subscription ;

  constructor(private contact: ContactService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Form content: ', form);
    this.subscription = this.contact.contactMessageToDatabase(form.value).subscribe(cm => {
      console.log(cm);
      if (cm) {        
        alert("your message was sent successfully, this is your message id : " + cm.ContactMessageId) ;
      }
      else alert("something wen wrong ..");
    },
    (err) => { alert("something wen wrong : " + err); },
    () => { form.resetForm();  }
    ) ;
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe() ;
  }

}
