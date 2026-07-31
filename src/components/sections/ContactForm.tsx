"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { contactService } from "@/lib/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more about what you need"),
  type: z.enum(["contact", "quote"]),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: "contact" },
  });

  async function onSubmit(values: FormValues) {
    try {
      await contactService.submit(values);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2 focus:border-primary focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2 focus:border-primary focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-ink">
          Company (optional)
        </label>
        <input
          id="company"
          {...register("company")}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2 focus:border-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="mt-1 w-full rounded-lg border border-mist px-4 py-2 focus:border-primary focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-green-700" role="status">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
