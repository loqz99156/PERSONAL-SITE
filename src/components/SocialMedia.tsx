"use client";

import { socialMediaData } from '@/lib/data';
import type { SocialMediaData } from '@/lib/types';
import { useState } from 'react';

export default function SocialMedia() {
  const [showWechatModal, setShowWechatModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-9 text-center text-3xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-4xl">
          社交媒体
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {socialMediaData.map((social: SocialMediaData) => (
            <div
              key={social.id}
              onClick={() => {
                if (social.id === 'social-1') {
                  window.open('https://x.com/Loqz99156', '_blank');
                } else if (social.id === 'social-2') {
                  setShowWechatModal(true);
                } else if (social.id === 'social-3') {
                  setShowVideoModal(true);
                }
              }}
              className={`flex flex-col items-center justify-center gap-3 h-[190px] w-[204px] rounded-lg bg-background-light dark:bg-background-dark border border-gray-300 dark:border-gray-600 hover:border-green-500 mx-auto p-4 shadow-sm hover:shadow-md transition-shadow ${
                social.id === 'social-1' || social.id === 'social-2' || social.id === 'social-3' ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full bg-cover bg-center ${social.id === 'social-1' || social.id === 'social-2' || social.id === 'social-3' ? 'w-[60px] h-[60px]' : ''}`}
                style={{ backgroundImage: `url("${social.iconUrl}")` }}
              />

              {/* Platform Name - Bold */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                {social.platformName}
              </h3>

              {/* Account Name - Gray */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {social.accountName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 微信公众号弹窗 */}
      {showWechatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-300" style={{ width: '384px', height: '420px', position: 'absolute', top: '20%' }}>
            {/* 标题 */}
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">微信公众号</h3>

            {/* 二维码 */}
            <div className="flex justify-center mb-4">
              <img
                src="/qrcode_for_gh_78236a7b027c_430.jpg"
                alt="微信公众号二维码"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>

            {/* 文字 */}
            <p className="text-center text-gray-700 mb-6">罗里叭说</p>

            {/* 关闭按钮 */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowWechatModal(false)}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 视频号弹窗 */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-xl border border-gray-300" style={{ width: '384px', height: '420px', position: 'absolute', top: '20%', right: '405.5px'}}>
            {/* 标题 */}
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">视频号</h3>

            {/* 二维码 */}
            <div className="flex justify-center mb-4">
              <img
                src="/20250925202953_83_861.jpg"
                alt="视频号二维码"
                className="w-48 h-48 rounded-lg object-cover"
              />
            </div>

            {/* 文字 */}
            <p className="text-center text-gray-700 mb-6">罗里叭说 AI</p>

            {/* 关闭按钮 */}
            <div className="flex justify-center">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
