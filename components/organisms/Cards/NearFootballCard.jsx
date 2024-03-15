import StarRate from '@/components/atoms/StarRate';

const NearFootballCard = ({ item }) => {
    return (
        <div className="border border-secondary w-full">
            <img src={item.image} />
            <div className='p-4 text-sm'>
                <div className='font-semibold text-base'>{item.name}</div>
                <div>
                    <strong>Mô tả: </strong>
                    {item.summary}
                </div>
                <StarRate rate={item.rate} className='my-2' />
                <div className="mb-1">
                    <strong>Giá: </strong>
                    <span className="text-[#f90303] font-semibold">
                        {item.price.from} - {item.price.to}
                    </span>{' '}
                    / Trận
                </div>
            </div>
        </div>
    );
};

export default NearFootballCard;
