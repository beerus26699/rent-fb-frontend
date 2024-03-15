import clsx from 'clsx';

const Textarea = ({ className, ...props }) => {
    return (
        <textarea
            type="text"
            className={clsx(
                'block w-full py-2 px-4 text-gray-700 border border-gray-400 rounded-sm focus:border-primary outline-primary',
                className
            )}
            
            {...props}
        />
    );
};

export default Textarea;
