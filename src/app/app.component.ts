import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { IEmailForm } from "../interface/email-form.interface";
import { EmailService } from "../service/email.service";
import { EmailJSResponseStatus } from "@emailjs/browser";
import Swal from "sweetalert2";

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
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  sendMessage(form: any) {
    if (form.valid) {
      // Mostrar mensaje de éxito
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Nos pondremos en contacto contigo lo antes posible.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });

      // Reinicia el formulario
      form.resetForm();
    } else {
      // Mostrar mensaje de error
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos obligatorios.",
        icon: "error",
        confirmButtonText: "Revisar",
      });
    }
  }
}
