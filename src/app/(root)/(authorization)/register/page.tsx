"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { signIn } from "next-auth/react";
import api from "@/src/lib/axios";
import { AuthResponseSchema } from "@/src/types/authentication";
import { AxiosError } from "axios";

const loginSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    username: z.string().min(1, "Nickname must be at least 3 characters"),
    password1: z.string().min(6, "Password must be at least 6 characters"),
    password2: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password1 === data.password2, {
    message: "Passwords must match",
    path: ["password2"],
  });

type LoginFormKeys = keyof z.infer<typeof loginSchema>;

const RegisterPage = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      username: "",
      password1: "",
      password2: "",
    },
  });

  const onSubmit = async ({
    email,
    password1,
    password2,
    username,
  }: z.infer<typeof loginSchema>) => {
    try {
      const response = await api.post("auth/register/", {
        email,
        password1,
        password2,
        username,
      });

      // TODO LOOK INTO THIS ZOD VALIDATION
      const parsedResponse = AuthResponseSchema.safeParse(response.data);

      if (!parsedResponse.success) {
        console.error("Error", parsedResponse.error);
        form.setError("root", { message: parsedResponse.error.message });
        return;
      }

      if (parsedResponse.success) {
        await signIn("credentials", {
          redirect: true,
          username: username,
          password: password1,
          callbackUrl: "/dashboard",
        });

        form.reset();
      }
    } catch (error) {
      const axiosErrorResponseData = (error as AxiosError).response?.data;

      if (axiosErrorResponseData) {
        Object.entries(axiosErrorResponseData).forEach(([key, value]) => {
          // Ensure the key is a valid form field
          if (["email", "username", "password1", "password2"].includes(key)) {
            form.setError(key as LoginFormKeys, {
              message: value.join(" "),
            });
          }
        });
      } else {
        form.setError("root", {
          message: "An unexpected error occurred",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4s">
        <div className="my-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-4">
          <FormField
            control={form.control}
            name="password1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repeat password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full" type="submit">
          Sign up
        </Button>
      </form>
    </Form>
  );
};

export default RegisterPage;
