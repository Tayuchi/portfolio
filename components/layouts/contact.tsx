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
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '../ui/card';
import emailjs, { init, send } from '@emailjs/browser'

const formShema = z.object({
	name: z.string().min(2, { message: "At least 2 letters are required" }).max(29, { message: "Letters must be under 30" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z.string().min(1, { message: "Message is necessary" })
})

type formType = z.infer<typeof formShema>

const Contact = () => {
	const form = useForm<formType>({
		resolver: zodResolver(formShema),
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
	})

  const onSubmit: SubmitHandler<formType> = async(data: formType) => {
		const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
		const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
		const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
		const { name, email, message } = data
		if (userId && serviceId && templateId) {
			try {
				init(userId)
				const params = {
						name: name,
						email: email,
						message: message
				}
				await send(serviceId, templateId, params)
			}
			catch (error) {
				console.log("メッセージの送信に失敗しました。")
			}
			finally {
				form.reset()
			}
		}
	}

	return (
		<div className='lg:w-[30%] md:w-[60%] sm:w-[80%] mx-auto mb-20'>
			<h1 className='text-2xl font-semibold text-center mb-5'>Contact</h1>
			<Card className='card mx-auto flex pt-10 pb-10'>
				<Form {...form}>
					<form className='w-[90%] mx-auto flex flex-col justify-between space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="Tayu" {...field} />
										</FormControl>
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
												<Input placeholder="example@gmail.com" {...field} />
										</FormControl>
										<FormMessage />
								</FormItem>
							)}
							/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea placeholder='Hello' {...field} className='resize-none h-[300px]'/>
										</FormControl>
										<FormMessage />
								</FormItem>
							)}
							/>
						<div className='text-center'>
							<Button>Submit</Button>
						</div>
					</form>
				</Form>
			</Card>
		</div>
	)
}

export default Contact