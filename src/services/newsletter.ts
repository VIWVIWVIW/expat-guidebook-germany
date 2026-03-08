/**
 * Newsletter service abstraction.
 *
 * Currently a mock. Replace the implementation with your real backend
 * (Supabase, Mailchimp, ConvertKit, custom API) without changing any
 * component code.
 */

export interface NewsletterResult {
  success: boolean;
  message: string;
}

/**
 * Subscribe an email to the newsletter.
 * This is the single integration point — swap the implementation when ready.
 */
export async function subscribeToNewsletter(email: string): Promise<NewsletterResult> {
  // --- MOCK IMPLEMENTATION ---
  // Replace with real API call, e.g.:
  // const res = await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });
  // return res.json();

  await new Promise((r) => setTimeout(r, 800));

  // Basic validation
  if (!email || !email.includes("@")) {
    return { success: false, message: "Please enter a valid email address." };
  }

  return {
    success: true,
    message: "Thanks for subscribing! Check your email to confirm.",
  };
}
