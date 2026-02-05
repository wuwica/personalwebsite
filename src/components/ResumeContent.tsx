'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Dynamically import react-pdf components to prevent SSR issues
const Document = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { ssr: false }
);

const Page = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

export default function ResumeContent() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Configure PDF.js worker from local public directory
    import('react-pdf').then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3, delay: 0.2 }} className="flex justify-center h-[70vh] overflow-hidden p-8">
      <a 
        href="/Jonathan Wu Resume.pdf" 
        target="_blank"
        className="no-underline border-0 relative flex items-center group"
      >
        <div className="w-full transition-opacity duration-300 group-hover:opacity-50">
        {isClient && (
          <Document file="/Jonathan Wu Resume.pdf">
            <Page pageNumber={1} />
          </Document>
        )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image 
            src="/imgs/external.svg"
            alt="Open resume"
            width={100}
            height={100}
            className="w-[100px] transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      </a>
    </motion.div>
  )
}
