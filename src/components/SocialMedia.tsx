"use client";

import { socialMediaData } from '@/lib/data';
import type { SocialMediaData } from '@/lib/types';
import { useState } from 'react';

export default function SocialMedia() {
  const [showWechatModal, setShowWechatModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className="w-full bg-[var(--module-background)] py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-9 text-center text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">
          社交媒体
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {socialMediaData.map((social: SocialMediaData) => {
            const isInteractive = ['social-1', 'social-2', 'social-3'].includes(social.id);

            return (
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
                className={`mx-auto flex h-[190px] w-[204px] flex-col items-center justify-center gap-3 rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-4 text-[var(--text-surface)] shadow-sm transition-shadow hover:shadow-md ${
                  isInteractive ? 'cursor-pointer hover:border-primary/50' : 'cursor-default'
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-full bg-cover bg-center ${isInteractive ? 'h-[60px] w-[60px]' : ''}`}
                  style={{ backgroundImage: `url("${social.iconUrl}")` }}
                />

                <h3 className="text-center text-lg font-bold text-[var(--text-surface)]">
                  {social.platformName}
                </h3>

                <p className="text-center text-sm text-[var(--text-surface-secondary)]">
                  {social.accountName}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {showWechatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[384px] rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 shadow-xl">
            <button
              onClick={() => setShowWechatModal(false)}
              className="absolute right-4 top-4 text-sm text-[var(--text-surface-secondary)] hover:text-primary"
              aria-label="关闭"
            >
              ×
            </button>
            <h3 className="mb-6 text-center text-xl font-bold text-[var(--text-surface)]">微信公众号</h3>
            <div className="mb-4 flex justify-center">
              <img
                src="/qrcode_for_gh_78236a7b027c_430.jpg"
                alt="微信公众号二维码"
                className="h-48 w-48 rounded-lg object-cover"
              />
            </div>
            <p className="mb-6 text-center text-[var(--text-surface-secondary)]">罗里叭说</p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowWechatModal(false)}
                className="rounded-md bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[384px] rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 shadow-xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute right-4 top-4 text-sm text-[var(--text-surface-secondary)] hover:text-primary"
              aria-label="关闭"
            >
              ×
            </button>
            <h3 className="mb-6 text-center text-xl font-bold text-[var(--text-surface)]">视频号</h3>
            <div className="mb-4 flex justify-center">
              <img
                src="/20250925202953_83_861.jpg"
                alt="视频号二维码"
                className="h-48 w-48 rounded-lg object-cover"
              />
            </div>
            <p className="mb-6 text-center text-[var(--text-surface-secondary)]">罗里叭说 AI</p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowVideoModal(false)}
                className="rounded-md bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
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
