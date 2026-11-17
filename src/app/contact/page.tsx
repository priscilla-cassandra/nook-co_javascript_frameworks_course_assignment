import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least three characters'),
  subject: z.string().min(3, 'The subject must be at least three characters'),
  email: z.email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Your message must be at least 10 characters long'),
});

export default function ContactPage() {
  return <main></main>;
}
