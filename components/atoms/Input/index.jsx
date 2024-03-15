import clsx from 'clsx';

const Input = ({ className, ...props }) => {
    return (
        <input
            type="text"
            className={clsx(
                'block w-full py-2 px-4 text-gray-700 border border-gray-400 rounded-sm focus:border-primary outline-primary',
                className
            )}
            {...props}
        />
    );
};

export default Input;
