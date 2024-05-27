import { FC } from "react"
import { useFormContext } from "react-hook-form"

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface InputFieldProps {
  label?: string
  placeholder?: string
  type?: string,
  className?: string,
  style?: any,
  disabled?: boolean,
  remark?: boolean // Changed type to boolean
  min?: any,
  max?: any,
  minlength?: any,
  maxlength?: any,
  pattern?: any,
  inputmode?: any
  onChange?: any
  value?: any
}

type FormInputProps = {
  name: string,
} & InputFieldProps

const FormInput: FC<FormInputProps> = ({ name, className, remark, ...otherProps }) => { // Added remark to props
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col justify-between w-full mt-2">
          {otherProps.label &&
            <div className="basis-2/4 ">
              <Label className="text-[#4B5563]">{otherProps?.label}{remark && <span className="text-red-500 pl-1">*</span>}</Label> {/* Conditional rendering for the asterisk */}
            </div>
          }
          <div className={`${otherProps.label && "basis-2/4"} relative w-full`}>
            <FormControl className="m-0 p-0" >
              <Input {...field} {...otherProps} className={
                cn(
                  `bg-white border-[1px] rounded-md  border-[#cccccc]  outline-none px-2 `,
                  className
                )
              } />
            </FormControl>
            <FormMessage className="absolute-bottom-6 mt-2" />
          </div>
        </FormItem>
      )}
    />
  )
}

export default FormInput
