"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import formSchema from './schema/formSchema';
import FormContainer from '@/components/common/Form/FormContainer';
import FormInput from '@/components/common/Form/FormInput';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import Location from './locaton/locaton';

interface FormData {
    name: string;
    origin: string;
    destination: string;
}

const Address: React.FC = () => {
    const [origin, setOrigin] = useState<string>('');
    const [destination, setDestination] = useState<string>('');

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          origin: "",
          destination: "",
        },
    });

    const onSubmit = (values: FormData): void => {
        setOrigin(values.origin);
        setDestination(values.destination);
        console.log("form",values);
    };

    return (
      <div>
        <FormContainer form={form} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
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
                name="origin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From</FormLabel>
                    <FormControl>
                      <FormInput placeholder="Origin" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To</FormLabel>
                    <FormControl>
                      <FormInput placeholder="Destination" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Search</Button>
          </div>
        </FormContainer>
        <div className="mt-8">
          <Location origin={origin} destination={destination} />
        </div>
      </div>
    );
}

export default Address;
