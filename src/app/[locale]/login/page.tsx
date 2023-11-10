import {redirectTest} from "@/app/[locale]/login/actions";

const Page = () => {
    return (
        <main className='min-h-screen w-full grid place-items-center'>

            <form action={redirectTest} className='space-y-6'>
                <h1 className='text-xl font-medium'>Request Redirect</h1>
                <button type="submit" className="px-2 py-3 bg-slate-700 text-white rounded hover:scale-105 transition-transform">Submit Form</button>
            </form>

        </main>
    );
};

export default Page;