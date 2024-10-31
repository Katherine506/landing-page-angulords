import { Injectable } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(formData: { to_name: string; from_name: string; subject: string; message: string }) {
    return emailjs.send(
      'service_ls0kls8',   
      'template_n4fghul',   
      {
        to_name: formData.to_name,
        from_name: formData.from_name,
        subject: formData.subject,
        message: formData.message
      },
      'mdWzw4JUvsDU4aZiC'                   
    );
  }
}