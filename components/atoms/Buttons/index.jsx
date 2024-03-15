import clsx from 'clsx';

const Button = ({ text, variant = 'fill', className, Icon, ...props }) => {
    return (
        <button
            type="button"
            className={clsx(
                'flex items-center justify-center w-40  text-base py-1 capitalize duration-300 rounded-lg',
                className,
                {
                    'bg-primary text-white hover:bg-[#168218]': variant === 'fill',
                    'border border-secondary text-gray-600 hover:text-primary hover:border-primary rounded':
                        variant === 'outline',
                }
            )}
            {...props}
        >
            {Icon && <Icon className="h-4 w-4 mr-1" />}
            {text}
        </button>
    );
};

export default Button;
