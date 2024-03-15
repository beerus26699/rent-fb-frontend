import clsx from 'clsx';
import FillStarIcon from '../Icons/FillStarIcon';
import StarIcon from '../Icons/StarIcon';

const StarRate = ({ rate, className }) => {
    return (
        <div className={clsx('flex gap-1 text-[#FF9727]', className)}>
            {[...Array(rate).keys()].map(() => (
                <FillStarIcon className="w-3 h-3 " />
            ))}
            {[...Array(5 - rate).keys()].map(() => (
                <StarIcon className="w-3 h-3 " />
            ))}
        </div>
    );
};

export default StarRate;
