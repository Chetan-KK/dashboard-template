"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { ButtonLoading } from "@/components/ui/button-loader";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string({
    required_error: "Please select an OS.",
  }),
  server_name: z.string({
    required_error: "Please enter server name.",
  }),
  no_of_interfaces: z.string({
    required_error: "Please enter no of interfaces.",
  }),
  ram: z.string({
    required_error: "Please select ram.",
  }),
  processor_type: z.string({
    required_error: "Please select processor type.",
  }),
  cores: z.string({
    required_error: "Please select cores.",
  }),
});

export default function CreateServerForm() {
  const [loading, setLoading] = useState(false);

  const [servername, setServername] = useState("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    console.log(data);

    setTimeout(() => {
      toast({
        title: "Your server is created successfully!",
        description: `${data.server_name} is created.`,
      });
      setLoading(false);
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/*  */}
        <div className="flex gap-5 flex-wrap">
          <FormField
            control={form.control}
            name="server_name"
            render={({ field }) => (
              <FormItem className="max-w-xs">
                <FormLabel>Sever name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter server name"
                    {...field}
                    onChange={(e) => {
                      setServername(e.target.value);
                    }}
                    value={servername}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="max-w-xs w-56">
                <FormLabel>Select OS</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select OS" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="CentOS">CentOS</SelectItem>
                    <SelectItem value="REHL">REHL</SelectItem>
                    <SelectItem value="Ubuntu server">Ubuntu server</SelectItem>
                    <SelectItem value="Linux">Linux</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-5 flex-wrap">
          <FormField
            control={form.control}
            name="ram"
            render={({ field }) => (
              <FormItem className="max-w-xs w-56">
                <FormLabel>Select RAM</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="RAM" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="512MB">512MB</SelectItem>
                    <SelectItem value="2GB">2GB</SelectItem>
                    <SelectItem value="4GB">4GB</SelectItem>
                    <SelectItem value="8GB">8GB</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="processor_type"
            render={({ field }) => (
              <FormItem className="max-w-xs w-56">
                <FormLabel>Select processor type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="processor type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="AMD">AMD</SelectItem>
                    <SelectItem value="Intel">Intel</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cores"
            render={({ field }) => (
              <FormItem className="max-w-xs w-56">
                <FormLabel>Select cores</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="cores" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="6">6</SelectItem>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                    <SelectItem value="64">64</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {loading ? (
          <ButtonLoading>Creating please wait</ButtonLoading>
        ) : (
          <Button type="submit">Create</Button>
        )}
      </form>
    </Form>
  );
}
