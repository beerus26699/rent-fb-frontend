import Logo from '../Logo';

const Footer = () => {
    return (
        <div className=" bg-secondary w-full">
            <div className="w-[1180px] mx-auto pt-8">
                <div className="grid grid-cols-5 gap-4 h-[180px]">
                    <Logo className="text-primary" />
                    <div className="flex flex-col gap-2">
                        <div className="uppercase text-xl font-medium">
                            QUICK LINKS
                        </div>
                        <div>Về chúng tôi</div>
                        <div>Đăng ký hợp tác</div>
                        <div>Blog - tin tức</div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="uppercase text-xl font-medium">
                            THÔNG TIN LIÊN HỆ
                        </div>
                        <div>
                            <strong>Địa chỉ:</strong> 27 Lê Văn Lương, Thanh
                            Xuân, Hà Nội
                        </div>
                        <div>
                            <strong>Điện thoại:</strong> 0393755766
                        </div>
                        <div>
                            <strong>Email:</strong> hainv266@gmail.com
                        </div>
                    </div>
                    <div className="flex flex-col col-span-2">
                        <div className="uppercase text-xl font-medium">
                            Chỉ đường
                        </div>
                    </div>
                </div>
                <div className='border-t-2 border-b-gray-950 mt-10 py-3 text-center text-gray-500 text-sm'>
                    Copyright © 2024 HAINV. All Rights Reserved | Powered by THUESANBONG
                </div>
            </div>
        </div>
    );
};

export default Footer;
