import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { IEmailForm } from "../interface/email-form.interface";
import { EmailService } from "../service/email.service";
import { EmailJSResponseStatus } from "@emailjs/browser";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title: string = "landing-page-angulords";
  private emailService: EmailService = inject(EmailService);
  formData: IEmailForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage(form: NgForm) {
    if (form.invalid) return;

    this.emailService.sendEmail({
      to_name: this.formData.email,      
      from_name: this.formData.name,      
      subject: this.formData.subject,  
      message: this.formData.message     
    }).then(
      (response: EmailJSResponseStatus) => {
        alert('Mensaje enviado exitosamente');
        form.resetForm();
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }
    ).catch(
      (error: Error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje. Por favor, intente nuevamente.');
      }
    );
  }
}
