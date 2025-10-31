
import React from 'react';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-100 text-sky-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Introduction: React.FC = () => {
  const cards = [
    {
      icon: <CommunicationIcon />,
      title: 'Xóa bỏ rào cản giao tiếp',
      description: 'Ngôn ngữ ký hiệu là phương tiện duy nhất để trẻ khiếm thính giao tiếp, học tập và phát triển. Ứng dụng là cầu nối tri thức cho các em.'
    },
    {
      icon: <GrowthIcon />,
      title: 'Phát triển tư duy sớm',
      description: 'Tiếp cận ngôn ngữ ký hiệu từ nhỏ giúp các em phát triển tư duy đa ngôn ngữ và khả năng giao tiếp hiệu quả, linh hoạt hơn.'
    },
    {
      icon: <CommunityIcon />,
      title: 'Xây dựng cộng đồng hòa nhập',
      description: 'Giáo dục về ngôn ngữ ký hiệu là nền tảng để xây dựng một xã hội bình đẳng, nơi mọi người đều có cơ hội giao tiếp và phát triển.'
    },
  ];

  return (
    <section id="gioi-thieu" className="py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vì một tương lai không khoảng cách</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Dự án ra đời với sứ mệnh mang đến một công cụ học tập hữu ích, dễ tiếp cận, góp phần cải thiện chất lượng cuộc sống cho trẻ em khiếm thính tại Việt Nam.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CommunicationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h4M5 8h1.5M5 11h1.5M5 14h1.5" />
  </svg>
);
const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);
const CommunityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.176-5.973" />
  </svg>
);

export default Introduction;
