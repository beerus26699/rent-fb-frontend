import ArrowIcon from '@/components/atoms/Icons/ArrowIcon';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="relative">
            <img className="w-full opacity-75" src="/images/henry.webp" />
            <div className="absolute top-1/4 left-20 text-black max-w-[400px]">
                <div className="border p-8 bg-secondary/70 rounded-lg">
                    <div className="mb-12 text-4xl font-bold">
                        Dịch vụ thuê sân bóng đá tại Hà Nội
                    </div>
                    <Link href="/football">
                        <div className=" flex items-center text-center rounded-md p-2 bg-yellow-600 animate-bounce animate-infinite animate-ease-in animate-normal animate-fill-both">
                            <div class="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                                Thuê sân ngay
                            </div>
                            <ArrowIcon className="text-black w-8 h-8 ml-3" />
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    );
}
