'use server'
import {redirect} from "next/navigation";

export const redirectTest = async (data: FormData) => {
    redirect('/login')
}