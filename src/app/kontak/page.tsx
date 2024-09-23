"use client"

import { Image, Divider } from "@nextui-org/react";
import { Metadata } from "next";
import { Button } from "@nextui-org/react";
import { useState, ChangeEvent, FormEvent } from 'react';
import { submitForm } from '@/app/actions';
import PageHeader from "@/templates/PageHeader"

interface FormData{
    name: string,
    email: string,
    phone?: string,
    address?: string,
    message: string
}

export default function KontakPage() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await submitForm(formData);
    };

    return (
        <div className='w-full min-h-screen'>
            <PageHeader title="HUBUNGI KAMI" subtitle="Gunakan formulir di bawah ini untuk menghubungi kami dan menentukan janji temu dengan ketua lingkungan." />
            <div className='w-full bg-neutral-gray-100 py-16'>
                <div className='w-full max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row gap-8'>
                    <div className='flex-1'>
                        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='text-lg font-semibold mb-2'>Nama Lengkap:</label>
                                <input id='name' type='text' placeholder='Nama Lengkap' className='p-3 border border-neutral-300 rounded-lg' required value={formData.name} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='email' className='text-lg font-semibold mb-2'>Email:</label>
                                <input id='email' type='email' placeholder='Email' className='p-3 border border-neutral-300 rounded-lg' required value={formData.email} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='phone' className='text-lg font-semibold mb-2'>Nomor yang Bisa Dihubungi (opsional):</label>
                                <input id='phone' type='tel' placeholder='Nomor Telepon' className='p-3 border border-neutral-300 rounded-lg' value={formData.phone} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='address' className='text-lg font-semibold mb-2'>Alamat (opsional):</label>
                                <input id='address' type='text' placeholder='Alamat' className='p-3 border border-neutral-300 rounded-lg' value={formData.address} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor='message' className='text-lg font-semibold mb-2'>Pesan atau Pertanyaan:</label>
                                <textarea id='message' placeholder='Pesan atau Pertanyaan' className='p-3 border border-neutral-300 rounded-lg' rows='4' required value={formData.message} onChange={handleChange} />
                            </div>
                            <button type="submit" className="rounded w-full text-neutral-white bg-blue-primary md:max-w-full py-2">Submit</button>
                        </form>
                    </div>

                    <div className='flex-1'>
                        <div className='w-full h-[400px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6782797837677!2d106.71136270942645!3d-6.173809893787755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f82f762d21e1%3A0x6fa55f3e9b6796e9!2sGereja%20Katolik%20Santo%20Matias%20Rasul%2C%20Kosambi%20Baru!5e0!3m2!1sid!2sid!4v1721630622548!5m2!1sid!2sid"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}