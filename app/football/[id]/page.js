import Button from '@/components/atoms/Buttons';
import EnvelopeIcon from '@/components/atoms/Icons/EnvelopeIcon';
import LocationIcon from '@/components/atoms/Icons/LocationIcon';
import Input from '@/components/atoms/Input';
import Textarea from '@/components/atoms/Input/Textarea';
import StarRate from '@/components/atoms/StarRate';
import BreadCrumb from '@/components/organisms/BreadCrumb';
import FormCard from '@/components/organisms/Cards/FormCard';
import NearFootballCard from '@/components/organisms/Cards/NearFootballCard';

const dataMock = {
    name: 'Sân bóng đá Học viện tài chính',
    rate: 4,
    address: '264 Nguyễn Trãi, Thanh Xuân Bắc, Thanh Xuân, Hà Nội',
    images: [
        'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
        'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
    ],
    description:
        '<h2>Bạn muốn thế sân bóng đá Học viện Tài Chính</h2><p style="text-align:justify"><a href="https://datsantructuyen.vn/san-bong-da/san-bong-da-hoc-vien-tai-chinh-p505.html">Sân bóng Học viện tài chính</a> là một trong những cụm sân bóng đẹp nhất ở phía Bắc Hà Nội, mới được đầu tư năm 2022, đây là tổ hợp thể thao của học viên Tài Chính cơ sở 1 tại khu vực Bắc Từ Liêm, một trong những sân bóng đá bạn không thể bỏ qua để tận hưởng những trận đấu của mình.</p><blockquote><p style="text-align:justify">Bạn cần biết:&nbsp;<a href="https://vecgroup.vn/chi-phi-lam-san-co-nhan-tao-ld35.html" target="_blank">chi phí mở sân bóng nhân tạo</a>&nbsp;và các bước&nbsp;<a href="https://vecgroup.vn/thi-cong/thi-cong-san-co-nhan-tao-n140.html" target="_blank">thi công sân bóng nhân tạo</a></p></blockquote><p style="text-align:justify">Sân có cơ sở hạ tầng hiện đại, cỏ nhân tạo đẹp và đẳng cấp. Hệ thống đèn chiếu sáng ban đêm cực sáng và tuyệt vời giúp bạn có những trận đấu hấp dẫn. Bạn muốn đặt sân vui lòng&nbsp;đến sân hoặc liên hệ với ban quản trị website Datsantructuyen.vn để được tư vấn hỗ trợ tốt nhất.</p><p style="text-align:justify">Một lưu ý nhỏ là sân bóng học viện Tài Chính nằm trong khuôn viên của trường, vì vậy trong giờ hành chính, sân bóng được sử dụng để phục vụ các bạn sinh viên tập thể dục và phục vụ đào tạo. Ngoài giờ hành chính, sân bóng được cho thuê để phục vụ cộng đồng, khách hàng lưu ý để có thể sắp xếp thời gian thi đấu phù hợp nhất.</p><blockquote><p style="text-align:justify">Xem thêm: <a href="https://datsantructuyen.vn/san-bong-da-pc7/khu-vuc-ha-noi/quan-huyen-bac-tu-liem.html">Các sân bóng đá đẹp tại Bắc Từ Liêm</a></p></blockquote><h3>Cơ sở vật chất và tiện ích tại sân bóng Tài Chính</h3><ul><li>Cụm 4 sân bóng đá mini</li><li>Có hệ thống đèn chiếu sáng hiện đại, đáp ứng nhu cầu thi đấu ban đêm</li><li>Lưới chắn bóng xung quanh sân cao 8m đảm bảo điều kiện thi đấu tốt nhất</li><li>Khung thành chắc chắn, kích thước 3.6m x 2.1m x 1.2m đúng chuẩn sân 7 hiện nay</li><li>Thường xuyên tổ chức các giải thi đấu bóng đá phong trào cho học sinh sinh viên các trường Mỏ và học viện Tài Chính</li></ul>',
    rule: 'Chúng tôi hân hạnh được phục vụ quý khách',
    nearFootballs: [
        {
            name: 'Sân bóng đá Học viện tài chính',
            image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
            rate: 4,
            summary: 'Cụm 4 sân bóng mini',
            price: {
                from: 400_000,
                to: 800_000,
            },
        },
        {
            name: 'Sân bóng đá Học viện tài chính',
            image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
            rate: 4,
            summary: 'Cụm 4 sân bóng mini',
            price: {
                from: 400_000,
                to: 800_000,
            },
        },
        {
            name: 'Sân bóng đá Học viện tài chính',
            image: 'https://datsantructuyen.vn/images/products/2022/08/11/large/ai-hoc-ha-nôi_1660204630.jpg',
            rate: 4,
            summary: 'Cụm 4 sân bóng mini',
            price: {
                from: 400_000,
                to: 800_000,
            },
        },
    ],
};

export default function FootballDetailPage({ params }) {
    const { id } = params;

    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Sân bóng', url: '#' },
                    { label: 'Hà Nội', url: '#' },
                    { label: 'Bắc Từ Liêm', url: '#' },
                ]}
            />
            <div className="flex gap-8 mt-8">
                <div className="basis-2/3">
                    <div className="text-3xl font-bold">{dataMock.name}</div>
                    <div className="my-3">
                        <StarRate rate={dataMock.rate} />
                    </div>
                    <img src={dataMock.images[0]} />
                    <div className="border-t-4 border-secondary mt-10">
                        <FormCard title="Mô tả sân">
                            <div
                                className="flex flex-col gap-4"
                                dangerouslySetInnerHTML={{
                                    __html: dataMock.description,
                                }}
                            />
                        </FormCard>
                    </div>
                    <FormCard title="Mô tả sân">
                        <div
                            className="flex flex-col gap-4"
                            dangerouslySetInnerHTML={{
                                __html: dataMock.rule,
                            }}
                        />
                    </FormCard>
                </div>
                <div className="basis-1/3">
                    <FormCard title="Địa chỉ" Icon={LocationIcon}>
                        <div>{dataMock.address}</div>
                        <Button
                            variant="outline"
                            className="w-full my-2"
                            text="Xem trên bản đồ"
                        />
                        <Button
                            variant="outline"
                            className="w-full"
                            text="Xem số chủ sân"
                        />
                    </FormCard>
                    <FormCard title="Gửi yêu cầu đặt sân" Icon={EnvelopeIcon}>
                        <div className="flex flex-col gap-4">
                            <Input placeholder="Họ và tên" />
                            <Input placeholder="Điện thoại" />
                            <Input placeholder="Email(nếu có)" />
                            <Input placeholder="Họ và tên" />
                            <Textarea placeholder="Lời nhắn" />
                        </div>
                    </FormCard>

                    <FormCard title="Sân bóng gần đấy">
                        <div className="flex flex-col gap-5">
                            {dataMock.nearFootballs.map((item) => (
                                <NearFootballCard item={item} />
                            ))}
                        </div>
                    </FormCard>
                </div>
            </div>
        </div>
    );
}
