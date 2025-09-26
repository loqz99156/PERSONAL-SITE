"use client";

import { contactData } from '@/lib/data';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const { email, meeting } = contactData;
  const [emailCopied, setEmailCopied] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);

  return (
    <section className="w-full bg-[var(--module-background)] py-12 md:py-24">
      <div className="container mx-auto max-w-[52rem] px-4 md:px-6">
        <h2 className="mb-[52px] text-center text-3xl font-bold tracking-tighter text-[var(--text-primary)] sm:text-4xl">
          联系方式
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 text-center shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Image
                src="/Gmail_icon_(2020).svg.png"
                alt="Gmail 图标"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[var(--text-surface)]">
              {email.title}
            </h3>
            <p className="mb-4 text-[var(--text-surface-secondary)]">
              {email.description}
            </p>
            <button
              className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
              onClick={() => {
                if (!email.address || !navigator?.clipboard) {
                  return;
                }
                void navigator.clipboard.writeText(email.address);
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000);
              }}
            >
              {emailCopied ? '已复制!' : '复制邮箱'}
            </button>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-8 text-center shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Image
                src="/wechat-logo.png"
                alt="微信图标"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-[var(--text-surface)]">
              {meeting.title}
            </h3>
            <p className="mb-4 text-[var(--text-surface-secondary)]">
              {meeting.description}
            </p>
            <button
              className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
              onClick={() => {
                if (!navigator?.clipboard) {
                  return;
                }
                void navigator.clipboard.writeText('Loqz2012');
                setWechatCopied(true);
                setTimeout(() => setWechatCopied(false), 2000);
              }}
            >
              {wechatCopied ? '已复制!' : '复制微信'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
