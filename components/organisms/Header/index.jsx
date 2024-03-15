import FootballIcon from '@/components/atoms/Icons/FootballIcon';
import Link from 'next/link';
import Logo from '../Logo';

const Header = () => {
    return (
        <div className="min-h-[50px] bg-green-700 text-secondary">
            <div className="h-full py-2 px-20">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-10">
                        <Link href="#">
                            <div className="border-b border-b-green-700 hover:border-b-secondary">
                                Sân đang thuê
                            </div>
                        </Link>
                        <Link href="/football">
                            <div className="border-b border-b-green-700 hover:border-b-secondary">
                                Tìm sân
                            </div>
                        </Link>
                        <Link href="/">
                            <div className="border-b border-b-green-700 hover:border-b-secondary">
                                Liên kết ví
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
