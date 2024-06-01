"use client";

import FormContainer from "@/components/common/Form/FormContainer";
import FormInput from "@/components/common/Form/FormInput";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import formSchema from "./schema/formSchema";
import { Input } from "@/components/ui/input";

interface FormData {
  username: string;
  dob: string; // dob should be a string for form handling
  gender: string; // Gender should be a string to match the zod schema
  isAdult: boolean;
}

const ContactPage = () => {
  const [date, setDate] = useState<Date | undefined>();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      dob: "",
      gender: "male", // Default value for gender
      isAdult: false,
    },
  });

  const onSubmit = (values: FormData) => {
    const submittedData = {
      ...values,
      dob: date ? format(date, "yyyy-MM-dd") : values.dob,
    };
    console.log(submittedData);
  };

  return (
    <div>
      <FormContainer form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="">
          <FormField
            control={form.control}
            name="username"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <FormInput placeholder="Name" {...field} />
                </FormControl>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormField
            control={form.control}
            name="dob"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <FormInput type="hidden" {...field} value={date ? format(date, "yyyy-MM-dd") : ""} />
                </FormControl>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <FormField
            control={form.control}
            name="gender"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <select {...field}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </FormControl>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <FormField
            control={form.control}
            name="isAdult"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Are you at least 18 years old?</FormLabel>
                <FormControl>
                  <FormInput type="checkbox" {...field} />
                </FormControl>
                {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </FormContainer>
    </div>
  );
};

export default ContactPage;
