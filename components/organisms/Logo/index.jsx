import FootballIcon from '@/components/atoms/Icons/FootballIcon';
import Link from 'next/link';

const Logo = ({ className }) => {
    return (
        <div className={className}>
            <Link href="/">
                <FootballIcon className="w-10 h-10 mx-auto" />
                <div className='text-center'>HT Sport</div>
            </Link>
        </div>
    );
};

export default Logo;
