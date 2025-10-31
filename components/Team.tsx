
import React from 'react';

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string; }> = ({ name, role, imageUrl }) => (
    <div className="text-center">
        <img 
            src={imageUrl} 
            alt={`Ảnh của ${name}`} 
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
        />
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sky-600 font-medium">{role}</p>
    </div>
);

const Team: React.FC = () => {
    const supervisor = {
        name: "Lê Thanh Hồng",
        role: "Giáo viên hướng dẫn",
        imageUrl: "https://picsum.photos/seed/teacher/200",
    };

    const students = [
        {
            name: "Lê Hữu Phước",
            role: "Học sinh thực hiện",
            imageUrl: "https://picsum.photos/seed/student1/200",
        },
        {
            name: "Nguyễn Thị Huế Trân",
            role: "Học sinh thực hiện",
            imageUrl: "https://picsum.photos/seed/student2/200",
        },
    ];

    return (
        <section id="doi-ngu" className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Đội Ngũ Phát Triển</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Những cá nhân tâm huyết đứng sau dự án ý nghĩa này.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-12">
                    <TeamMemberCard {...supervisor} />
                    <div className="grid sm:grid-cols-2 gap-10 md:gap-16">
                        {students.map((student, index) => (
                            <TeamMemberCard key={index} {...student} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
