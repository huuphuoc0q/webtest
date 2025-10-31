
import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; imageUrl: string; }> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
        <div className="relative h-56">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300"></div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);


const Features: React.FC = () => {
  const features = [
    {
      title: 'Học Bảng Chữ Cái Tiếng Việt',
      description: 'Hướng dẫn chi tiết cách thực hiện ký hiệu cho từng chữ cái (A-Z, bao gồm cả dấu) qua hình ảnh và phản hồi trực tiếp từ camera.',
      imageUrl: 'https://picsum.photos/seed/alphabet/600/400',
    },
    {
      title: 'Học Số Đếm Cơ Bản',
      description: 'Nhận diện và hướng dẫn các ký hiệu số đếm từ 0 đến 9, giúp trẻ xây dựng nền tảng toán học ban đầu một cách tự nhiên.',
      imageUrl: 'https://picsum.photos/seed/numbers/600/400',
    },
    {
      title: 'Luyện Tập & Giải Từ',
      description: 'Củng cố kiến thức qua các trò chơi tương tác như giải từ vựng ngẫu nhiên, giúp trẻ ghi nhớ ký hiệu lâu hơn và tạo hứng thú học tập.',
      imageUrl: 'https://picsum.photos/seed/puzzle/600/400',
    },
    {
      title: 'Nhập Từ Tự Do',
      description: 'Chế độ cho phép trẻ tự do thể hiện các từ đã học. Hệ thống sẽ nhận diện, lưu lại và hiển thị, tạo cảm giác thành tựu cho trẻ.',
      imageUrl: 'https://picsum.photos/seed/input/600/400',
    },
  ];

  return (
    <section id="tinh-nang" className="py-20 sm:py-24 bg-sky-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tính Năng Nổi Bật</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các chế độ học tập đa dạng, được thiết kế để mang lại trải nghiệm tương tác và hiệu quả nhất cho trẻ.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
