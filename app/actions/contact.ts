"use server"

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // In a real implementation, you'd use a service like Resend, SendGrid, or Nodemailer
  // For now, we'll simulate the email sending
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your email service
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@covermygenetics.com',
    //   to: 'info@covermygenetics.com',
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      subject,
      message,
    })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message:
        "Sorry, there was an error sending your message. Please try again or email us directly at info@covermygenetics.com.",
    }
  }
}
