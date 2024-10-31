import { Injectable } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  sendEmail(formData: {
    to_name: string;
    from_name: string;
    subject: string;
    message: string;
  }) {
    return emailjs.send(
      "service_9w611fa",
      "template_i86rs5f",
      {
        to_name: formData.to_name,
        from_name: formData.from_name,
        subject: formData.subject,
        message: formData.message,
      },
      "Oj6LSYMRevIWOOPhb"
    );
  }
}
