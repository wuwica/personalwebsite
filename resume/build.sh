#!/bin/bash
# Build resume PDFs using Docker (no local LaTeX needed)
# Note: blang/latex uses pdflatex - for XeLaTeX + Niveau Grotesk, use local Makefile
set -e
cd "$(dirname "$0")"
mkdir -p build

PROJECT_ROOT="$(cd .. && pwd)"
docker run --rm -v "$PROJECT_ROOT:/project" -w /project/resume blang/latex:ubuntu \
  bash -c '
    pdflatex -interaction=nonstopmode -output-directory=build -jobname="Jonathan Wu Resume" resume-display
    pdflatex -interaction=nonstopmode -output-directory=build -jobname="Jonathan Wu Resume" resume-display
    pdflatex -interaction=nonstopmode -output-directory=build -jobname="Jonathan Wu Resume - ATS" resume-ats
    pdflatex -interaction=nonstopmode -output-directory=build -jobname="Jonathan Wu Resume - ATS" resume-ats
    cp build/"Jonathan Wu Resume.pdf" ../public/
    cp build/"Jonathan Wu Resume - ATS.pdf" ../public/
  '
echo "Done. PDFs copied to public/"
