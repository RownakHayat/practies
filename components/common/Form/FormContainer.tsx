'use client';

import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Form } from "@/components/ui/form";

interface FormContainerProps {
  form: UseFormReturn<any>;
  onSubmit: (values: any) => void;
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ form, onSubmit, children }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {children}
      </form>
    </Form>
  );
};

export default FormContainer;
