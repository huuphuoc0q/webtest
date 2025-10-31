
import React from 'react';

const Technology: React.FC = () => {
  return (
    <section id="cong-nghe" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-sky-600 font-semibold">CÔNG NGHỆ CỐT LÕI</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              Sức mạnh từ MediaPipe của Google
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              Ứng dụng sử dụng thư viện MediaPipe để nhận diện 21 điểm mốc (landmarks) trên bàn tay trong thời gian thực. Công nghệ này cho phép phân tích cử chỉ với độ chính xác cao mà không đòi hỏi phần cứng máy tính mạnh mẽ.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Hiệu suất cao:</span> Xử lý video trực tiếp từ webcam một cách mượt mà, phản hồi tức thì.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Dung lượng nhẹ:</span> Dễ dàng cài đặt và sử dụng trên hầu hết các máy tính phổ thông.</span>
              </li>
              <li className="flex items-start">
                <CheckIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Đa nền tảng:</span> Hoạt động tốt trên Windows, mở ra tiềm năng phát triển trên các nền tảng khác.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl shadow-inner">
             <img 
                src="https://storage.googleapis.com/aai-web-template-files/hand-landmarks.png"
                alt="Hand landmarks diagram from MediaPipe"
                className="w-full h-auto object-contain rounded-lg"
             />
             <p className="text-center text-sm text-gray-500 mt-4">Sơ đồ 21 điểm mốc trên bàn tay được MediaPipe nhận diện.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default Technology;
