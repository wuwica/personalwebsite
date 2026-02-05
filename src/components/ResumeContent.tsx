'use client';

import Image from 'next/image'
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function ResumeContent() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .3, delay: 0.2 }} className="flex justify-center h-[70vh] overflow-hidden p-8">
      <a 
        href="/Jonathan Wu Resume.pdf" 
        target="_blank"
        className="no-underline border-0 relative flex items-center group"
      >
        <div className="w-full transition-opacity duration-300 group-hover:opacity-50">
        <Document
          file="/Jonathan Wu Resume.pdf"
        >

          <Page pageNumber={1} />

        </Document>
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
