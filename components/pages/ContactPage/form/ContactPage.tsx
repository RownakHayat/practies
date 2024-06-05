"use client";

import FormContainer from "@/components/common/Form/FormContainer";
import FormInput from "@/components/common/Form/FormInput";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import formSchema from "../schema/formSchema";

interface FormData {
  username: string;
  email: string;
  gender: string;
  to_days: string;
  review: string;
  rating: number;
  isAdult: boolean;
}

const ContactPage = () => {
  const [to_days, setto_days] = useState<Date | undefined>();
  const [rating, setRating] = useState<number>(0);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      gender: "",
      to_days: "",
      review: "",
      rating: 0,
      isAdult: false,
    },
  });

  const onSubmit = (values: FormData) => {
    const submittedData = {
      ...values,
      to_days: to_days ? format(to_days, "dd-MM-yyyy") : values.to_days,
      rating: rating,
    };
    console.log(submittedData);
  };

  
  return (
    <div>
      <FormContainer form={form} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <FormField
              control={form.control}
              name="username"
              render={({ field,   }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <FormInput placeholder="Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field,   }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <FormInput placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormLabel>To day ...</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !to_days && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {to_days ? format(to_days, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={to_days}
                  onSelect={setto_days}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormField
              control={form.control}
              name="to_days"
              render={({ field}) => (
                <FormItem>
                  <FormControl>
                    
                    <FormInput
                      type="hidden"
                      {...field}
                      value={to_days ? format(to_days, "yyyy-MM-dd") : ""}
/>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <select {...field} className="p-2 rounded">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="isAdult"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>You are Adult</FormLabel>
                  <FormControl>
                    <FormInput
                      type="checkbox"
                      className="w-5 h-5"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="review"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <FormInput
                      type="text"
                      {...field}
                      placeholder="Review"
                      className="p-2 rounded"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="rating"
              render={({ field}) => (
                <FormItem>
                  <FormLabel>Rating Mark</FormLabel>
                  <FormControl>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </FormContainer>
    </div>
  );
};

export default ContactPage;
