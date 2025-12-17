'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className='py-6 shadow-sm bg-VerdeP'>
      <div className='maxW'>
        <div>
          <a href="/">
            <img className='w-[140px] mx-auto' src="/logo-footer.png" alt="" />
          </a>
        </div>
        <p className='text-center text-p2blueD pt-6'>{t('rights')}</p>
      </div>
    </footer>
  );
}