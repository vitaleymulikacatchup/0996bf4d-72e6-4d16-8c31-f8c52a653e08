"use client";
import { redirect } from 'next/navigation';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';
import { useEffect, useState } from 'react';

export default function Home() {
  const [footerData, setFooterData] = useState({
    logoSrc: "/images/logo.svg",
    logoAlt: "Logo",
    columns: [
      {
        title: "Explore",
        items: [
          { label: "Portfolio", onClick: () => redirect('#portfolio') },
          { label: "About", onClick: () => redirect('#about') },
        ]
      },
      {
        title: "Policies",
        items: [
          { label: "Terms of Service", onClick: () => redirect('#terms') },
          { label: "Privacy Policy", onClick: () => redirect('#privacy') },
        ]
      },
      {
        title: "Contact",
        items: [
          { label: "Reach Us", onClick: () => redirect('#contact') },
        ]
      }
    ],
    copyrightText: "© 2025 Futurist Lens Portfolio",
    onPrivacyClick: () => redirect('#privacy'),
  });

  return (
    <>
      <BillboardHero title="Futuristic Photography" subtitle="Explore stunning visuals from the future." />
      <BentoMediaGallery items={[
        { title: 'Work 1', image: '/images/placeholder1.avif' },
        { title: 'Work 2', image: '/images/placeholder2.avif' },
        { title: 'Work 3', image: '/images/placeholder3.avif' },
        { title: 'Work 4', image: '/images/placeholder4.avif' },
        { title: 'Work 5', image: '/images/placeholder5.avif' },
        { title: 'Work 6', image: '/images/placeholder6.avif' }
      ]} className="my-8" gridClassName="grid-cols-3 gap-4" />
      <TextboxStandard title={<h1 className='text-3xl font-semibold'>About the Photographer</h1>} description={<p className='text-lg'>With a passion for futuristic aesthetics, I captivate audiences through detailed visual narratives.</p>} />
      <CentralFAQ items={[
        { title: "What inspired your work?", content: "Inspired by futuristic concepts and digital art trends that resonate with the theme of tomorrow." },
        { title: "How can I book a session?", content: "Inquiry forms are available to discuss your vision and booking details!" }
      ]} />
      <FooterBase {...footerData} />
    </>
  );
}