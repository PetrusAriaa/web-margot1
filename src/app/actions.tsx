'use server'

interface FormData {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    message: string;
}

export async function submitForm(data: FormData) {
    const { name, email, phone, address, message } = data;
    console.log('Form Data:', { name, email, phone, address, message });

    
    return { message: 'Form submitted successfully' };
}