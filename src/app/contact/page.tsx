'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least three characters'),
  email: z.email('Please enter a valid email address'),
  subject: z.string().min(3, 'The subject must be at least three characters'),
  message: z
    .string()
    .min(10, 'Your message must be at least 10 characters long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
    setIsSent(true);
  };

  return (
    <div className="mx-auto w-full max-w-xl px-4 py-8 md:py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsSent(false)}
        noValidate
        className="flex flex-col gap-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8"
      >
        <h2 className="text-2xl font-bold md:text-3xl">Contact</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="fullName">Full Name:</label>
          <input
            id="fullName"
            {...register('fullName')}
            aria-invalid={errors.fullName ? 'true' : 'false'}
            className="rounded border border-gray-300 px-3 py-2 aria-invalid:border-red-600"
          />
          {errors.fullName && (
            <p role="alert" className="text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            aria-invalid={errors.email ? 'true' : 'false'}
            className="rounded border border-gray-300 px-3 py-2 aria-invalid:border-red-600"
          />
          {errors.email && (
            <p role="alert" className="text-sm text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Subject:</label>
          <input
            id="subject"
            {...register('subject')}
            aria-invalid={errors.subject ? 'true' : 'false'}
            className="rounded border border-gray-300 px-3 py-2 aria-invalid:border-red-600"
          />
          {errors.subject && (
            <p role="alert" className="text-sm text-red-600">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register('message')}
            aria-invalid={errors.message ? 'true' : 'false'}
            className="rounded border border-gray-300 px-3 py-2 aria-invalid:border-red-600"
          />
          {errors.message && (
            <p role="alert" className="text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-black px-4 py-2 font-medium text-white hover:bg-gray-800 disabled:opacity-50 md:w-auto md:self-start"
        >
          Send
        </button>
        {isSent && (
          <p role="status" className="rounded bg-green-50 p-3 text-green-800">
            Your message was sent. You will hear from us in 1-4 business days.
          </p>
        )}
      </form>
    </div>
  );
}
