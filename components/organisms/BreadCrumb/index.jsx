import ArrowForwardIcon from '@/components/atoms/Icons/ArrowForwardIcon';

const { default: Link } = require('next/link');

const BreadCrumb = ({ items }) => {
    return (
        <div>
            <div className="flex text-sm gap-1">
                <Link href="#" className="hover:text-primary">
                    Trang chủ
                </Link>
                {items.map((item) => (
                    <>
                        <ArrowForwardIcon className="w-4 h-4" />
                        <Link href={item.url} className="hover:text-primary">
                            {item.label}
                        </Link>
                    </>
                ))}
            </div>
        </div>
    );
};

export default BreadCrumb;
