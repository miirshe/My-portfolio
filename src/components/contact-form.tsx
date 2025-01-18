"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Button } from "./ui/button";
import { FileDownIcon } from "lucide-react";
import { submitContactForm } from "@/app/actions";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-between gap-8 w-full max-w-4xl mx-auto">
      {/* Left side - Profile Info */}
      <div className="flex flex-col items-center md:items-start md:w-1/3">
        {/* <Avatar className="size-32 border">
          <AvatarImage
            alt={DATA.name}
            src={DATA.avatarUrl}
            className="w-32 h-32"
          />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar> */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold">{DATA.name}</h2>
          <p className="text-muted-foreground">Full-Stack Developer</p>
        </div>

        <a
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-primary py-2 rounded-md w-full flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground hover:bg-primary/80 group"
        >
          <FileDownIcon className="h-4 w-4 text-white dark:text-black transform transition-transform group-hover:translate-y-[-2px] group-hover:scale-110"  />
          <span className="text-white dark:text-black">Get Resume</span>
        </a>
      </div>

      {/* Right side - Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <div className="flex flex-col space-y-4">
          <div>
            <label className="flex items-center gap-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email address"
              className="w-full py-2 px-3 rounded-md border "
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="write subject"
              className="w-full py-2 px-3 rounded-md border "
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="write your message here"
              className="w-full py-2 px-3 rounded-md border "
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-8 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-white/60 dark:bg-white dark:text-black"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>

        {submitStatus === "success" && (
          <div className="mt-4 text-sm text-green-600">
            Message sent successfully!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 text-sm text-red-600">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
