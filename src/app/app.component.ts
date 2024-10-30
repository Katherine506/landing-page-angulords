import { CommonModule } from "@angular/common";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title: string = "landing-page-angulords";

  @ViewChild("name") nameInput!: ElementRef;
  @ViewChild("email") emailInput!: ElementRef;
  @ViewChild("subject") subjectInput!: ElementRef;
  @ViewChild("message") messageInput!: ElementRef;

  sendEmail() {
    const name = this.nameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const subject = this.subjectInput.nativeElement.value;
    const message = this.messageInput.nativeElement.value;

    // Validación simple
    if (!name || !email || !subject || !message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Generar el enlace mailto
    const mailtoLink = `mailto:angulordscenfotec@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=Nombre: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(
      email
    )}%0ASujeto: ${encodeURIComponent(subject)}%0AMensaje: ${encodeURIComponent(
      message
    )}`;

    // Log para depuración
    console.log(mailtoLink); // Verifica el enlace generado

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;

    // Limpiar los campos del formulario
    this.nameInput.nativeElement.value = "";
    this.emailInput.nativeElement.value = "";
    this.subjectInput.nativeElement.value = "";
    this.messageInput.nativeElement.value = "";
  }
}
