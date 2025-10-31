
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Học <span className="text-sky-600">Ngôn Ngữ Ký Hiệu</span> Trực Quan và Hiệu Quả
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Ứng dụng tiên phong sử dụng AI nhận diện cử chỉ tay, giúp trẻ khiếm thính và cộng đồng dễ dàng học bảng chữ cái, số đếm tiếng Việt.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="bg-sky-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-sky-700 transition-transform hover:scale-105 duration-300 shadow-lg">
                Tải về cho Windows
              </a>
              <a href="#tinh-nang" className="bg-gray-200 text-gray-800 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-300 transition-transform hover:scale-105 duration-300">
                Khám phá tính năng
              </a>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-sky-300 to-blue-500 rounded-full blur-3xl opacity-30 -z-10"></div>
            <img 
              src="https://picsum.photos/id/1069/800/600"
              alt="A child learning sign language with a smiling teacher" 
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
