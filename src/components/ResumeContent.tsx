'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const maxWidth = 860;

export default function ResumeContent() {
  const [isClient, setIsClient] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setIsClient(true);

    // Configure PDF.js worker from local public directory
    import('react-pdf').then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    });
  }, []);

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(onResize);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [onResize]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex justify-center overflow-visible p-4 sm:p-8"
    >
      <a 
        href="/Jonathan Wu Resume.pdf" 
        target="_blank"
        className="w-full no-underline border-0 relative flex items-center group"
      >
        <div
          ref={containerRef}
          className="w-full max-w-[90vw] md:max-w-[860px] transition-opacity duration-300 group-hover:opacity-50"
        >
          {isClient && (
            <Document file="/Jonathan Wu Resume.pdf" className="w-full">
              <Page
                pageNumber={1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
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
