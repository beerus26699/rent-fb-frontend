import Button from '@/components/atoms/Buttons';
import StarRate from '@/components/atoms/StarRate';
import Link from 'next/link';

const FootballCard = ({ item }) => {
    return (
        <div className="p-4 shadow-football-card border-t rounded-md">
            <div className="flex gap-3">
                <img width={200} src={item.image} />
                <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm mt-2">
                        <StarRate rate={item.rate} />
                        <div className="mb-1">
                            <strong>Địa chỉ: </strong>
                            {item.address}
                        </div>
                        <div className="mb-1">
                            <strong>Giá tham khảo: </strong>
                            <span className="text-[#f90303] font-semibold">
                                {item.price.from} - {item.price.to}
                            </span>{' '}
                            / Trận
                        </div>
                        <div className="mt-4">
                            <Link href={`football/${2}`}>
                                <Button text="Xem chi tiết" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FootballCard;
