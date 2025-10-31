
import React from 'react';

const Milestone: React.FC<{ title: string; description: string; icon: React.ReactNode; isLast?: boolean }> = ({ title, description, icon, isLast }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white">
                {icon}
            </div>
            {!isLast && <div className="w-px h-full bg-gray-300"></div>}
        </div>
        <div className="pb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const Roadmap: React.FC = () => {
    const milestones = [
        {
            title: "Tối ưu độ chính xác",
            description: "Cải thiện thuật toán nhận diện, tích hợp các mô hình học sâu để giảm thiểu ảnh hưởng của ánh sáng và tăng độ chính xác lên trên 95%.",
            icon: <TargetIcon />,
        },
        {
            title: "Hỗ trợ đa nền tảng",
            description: "Phát triển phiên bản cho thiết bị di động (Android, iOS) và phiên bản web để người dùng có thể truy cập hệ thống mọi lúc, mọi nơi.",
            icon: <DevicesIcon />,
        },
        {
            title: "Mở rộng phạm vi ứng dụng",
            description: "Nâng cấp hệ thống để nhận diện các cụm từ, câu hoàn chỉnh và chuỗi hành động liên tục, tiến tới giao tiếp tự nhiên.",
            icon: <ExpandIcon />,
        },
        {
            title: "Cá nhân hóa lộ trình học",
            description: "Xây dựng tính năng lưu trữ và quản lý từ vựng đã học, đề xuất các bài luyện tập phù hợp với tiến độ của từng người dùng.",
            icon: <UserIcon />,
        },
    ];

    return (
        <section id="lo-trinh" className="py-20 sm:py-24 bg-sky-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Định Hướng Phát Triển</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Dự án không ngừng cải tiến để trở thành một giải pháp toàn diện cho cộng đồng.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    {milestones.map((milestone, index) => (
                        <Milestone key={index} {...milestone} isLast={index === milestones.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v1.5M12 16.253v1.5M15.364 8.636l-1.061 1.061M8.636 15.364l-1.061 1.061M17.753 12h-1.5M7.753 12h-1.5m9.02-3.364l1.06-1.06M6.636 17.364l1.06-1.061M12 21a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
);
const DevicesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);
const ExpandIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" />
    </svg>
);
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export default Roadmap;
