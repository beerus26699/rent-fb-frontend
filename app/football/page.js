import BreadCrumb from '@/components/organisms/BreadCrumb';
import FootballCard from '@/components/organisms/Cards/FootballCard';

const dataMocks = [
    {
        name: 'Sân bóng Đại học Hà Nội',
        image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        rate: 4,
        address: '264 Nguyễn Trãi, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
        price: {
            from: 400_000,
            to: 800_000,
        },
    },
    {
        name: 'Sân bóng Đại học Hà Nội',
        image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        rate: 4,
        address: '264 Nguyễn Trãi, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
        price: {
            from: 400_000,
            to: 800_000,
        },
    },
    {
        name: 'Sân bóng Đại học Hà Nội',
        image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        rate: 4,
        address: '264 Nguyễn Trãi, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
        price: {
            from: 400_000,
            to: 800_000,
        },
    },
    {
        name: 'Sân bóng Đại học Hà Nội',
        image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        rate: 4,
        address: '264 Nguyễn Trãi, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
        price: {
            from: 400_000,
            to: 800_000,
        },
    },
];

export default function FootballPage() {
    return (
        <div className=''>
            <BreadCrumb
                items={[
                    { label: 'Sân bóng', url: '#' },
                    { label: 'Hà Nội', url: '#' },
                ]}
            />
            <div className="mt-10">
                <div className="flex gap-4">
                    <div className="basis-1/4">Filter</div>
                    <div className="basis-3/4 flex gap-4 flex-col">
                        <div>
                            <div className='text-xl font-semibold text-primary'>Sân bóng đá Hà Nội</div>
                            <p className='text-sm'>Danh sách sân bóng đá tại HN: Cập nhật thông tin liên hệ đặt lịch và giá thuê sân</p>
                        </div>
                        {dataMocks.map((item) => (
                            <FootballCard item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
