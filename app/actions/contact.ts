"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would integrate with your email service
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
