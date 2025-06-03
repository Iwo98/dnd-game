"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
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

const loginSchema = z.object({
  username: z.string().min(1, "Username"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async ({
    username,
    password,
  }: z.infer<typeof loginSchema>) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: username,
      password: password,
    });
    if (!result?.ok) {
      form.setError("username", {
        type: "manual",
      });
      form.setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
      return;
    }

    form.reset();
    router.replace("dashboard");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4s">
        <div className="my-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-4">
          <FormField
            control={form.control}
            name="password"
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
        </div>
        <Button className="w-full" type="submit">
          Log in
        </Button>
      </form>
    </Form>
  );
};

export default LoginPage;
