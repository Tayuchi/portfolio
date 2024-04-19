"use client"

import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';

const formShema = z.object({
    name: z.string().min(2, { message: "2文字以上で入力してください" }).max(10, { message: "10文字以下で入力してください" }),
    email: z.string().email({ message: "メールアドレスの形式ではありません" }),
    content: z.string().min(1, { message: "お問い合わせ内容は入力必須です。" })
})

type formType = z.infer<typeof formShema>

const Contact = () => {
    const form = useForm<formType>({
        resolver: zodResolver(formShema),
        defaultValues: {
            name: "",
            email: "",
            content: ""
        }
    })

    const onSubmit = (data: formType) => {
        console.log(data)
    }

    return (
      <div className='container h-screen flex items-center'>
        <div className='lg:w-[50%] w-full mx-auto'>
          <h1 className="text-2xl font-semibold text-center mb-5">Contact</h1>
            <Form {...form}>
              <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                  <Input placeholder="Tayu" {...field} />
                              </FormControl>
                              <FormDescription>Your name</FormDescription>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                  <Input placeholder="example@example.com" {...field} />
                              </FormControl>
                              <FormDescription>Yourt email address</FormDescription>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                          <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                  <Textarea placeholder='Hello, Tayu!' {...field} className='resize-none h-[200px]'/>
                              </FormControl>
                              <FormDescription>Your message content</FormDescription>
                              <FormMessage />
                          </FormItem>
                      )}
                  />
                  <div className="text-center">
                    <Button>Submit</Button>
                  </div>
              </form>
            </Form>
        </div>
      </div>
  )
}

export default Contact