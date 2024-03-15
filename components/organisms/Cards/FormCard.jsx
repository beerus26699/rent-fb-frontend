const FormCard = ({ children, title, Icon }) => {
    return (
        <div className="w-full shadow-form-card mb-5 rounded border border-[#ededed]">
            <div className="px-5 py-3 bg-secondary font-semibold flex items-center gap-2">
                {Icon && <Icon className='w-4 h-4' />}
                <span>{title}</span>
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
};

export default FormCard;
