# Resume build - produces two PDF versions
# Content source: ../Resume 4.0.docx (sync LaTeX when you update it)
# Output: build/ (artifacts), copies PDFs to ../public/
#
# 1. Jonathan Wu Resume.pdf - 2-column, for website & recruiters
# 2. Jonathan Wu Resume - ATS.pdf - single column, for bots/ATS parsing

# XeLaTeX required for Niveau Grotesk (fontspec); LANG=C fixes paper format on WSL
LATEX = LANG=C LC_ALL=C xelatex -interaction=nonstopmode
BUILD_DIR = build
DISPLAY_SRC = resume-display
ATS_SRC = resume-ats
DISPLAY_OUT = Jonathan Wu Resume
ATS_OUT = Jonathan Wu Resume - ATS
PUBLIC_DIR = ../public

.PHONY: all display ats clean copy dir

all: dir display ats copy

dir:
	@mkdir -p $(BUILD_DIR)

display: dir
	$(LATEX) -output-directory=$(BUILD_DIR) -jobname="$(DISPLAY_OUT)" $(DISPLAY_SRC)
	$(LATEX) -output-directory=$(BUILD_DIR) -jobname="$(DISPLAY_OUT)" $(DISPLAY_SRC)

ats: dir
	$(LATEX) -output-directory=$(BUILD_DIR) -jobname="$(ATS_OUT)" $(ATS_SRC)
	$(LATEX) -output-directory=$(BUILD_DIR) -jobname="$(ATS_OUT)" $(ATS_SRC)

DISPLAY_PDF := $(BUILD_DIR)/$(DISPLAY_OUT).pdf
ATS_PDF := $(BUILD_DIR)/$(ATS_OUT).pdf

copy: display ats
	cp "$(DISPLAY_PDF)" $(PUBLIC_DIR)/
	@echo "Copied display PDF to $(PUBLIC_DIR)/"
	cp "$(ATS_PDF)" $(PUBLIC_DIR)/
	@echo "Copied ATS PDF to $(PUBLIC_DIR)/"

clean:
	rm -rf $(BUILD_DIR)
	rm -f *.aux *.log *.out *.fls *.fdb_latexmk *.synctex.gz
