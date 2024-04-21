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
		<div className='lg:w-[70%] w-full mx-auto mb-5'>
				<h2 className='text-2xl font-semibold text-center mb-5'>Contact</h2>
					<Form {...form}>
							<form className='flex flex-col items-center justify-between space-y-10' onSubmit={form.handleSubmit(onSubmit)}>
									<FormField
											control={form.control}
											name="name"
											render={({ field }) => (
													<FormItem>
															<FormLabel>名前</FormLabel>
															<FormControl>
																	<Input placeholder="Tayu" {...field} />
															</FormControl>
															<FormDescription>お名前をお書きください。</FormDescription>
															<FormMessage />
													</FormItem>
											)}
									/>
									<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
													<FormItem>
															<FormLabel>メールアドレス</FormLabel>
															<FormControl>
																	<Input placeholder="example@gmail.com" {...field} />
															</FormControl>
															<FormDescription>メールアドレスをお書きください。</FormDescription>
															<FormMessage />
													</FormItem>
											)}
									/>
									<FormField
											control={form.control}
											name="content"
											render={({ field }) => (
													<FormItem>
															<FormLabel>お問い合わせ内容</FormLabel>
															<FormControl>
																	<Textarea placeholder='こんにちは' {...field} className='resize-none h-[200px]'/>
															</FormControl>
															<FormDescription>お問い合わせ内容をお書きください。</FormDescription>
															<FormMessage />
													</FormItem>
											)}
									/>
									<Button>送信</Button>
							</form>
					</Form>
			</div>
    )
}

export default Contact