# Printing the Syllabus

## Install Pandoc

If you are using a Debian derivate Linux distribution (ex. Ubuntu ) you can do 

	sudo apt-get install pandoc

If you are in MacOS install [Homebrew](http://brew.sh/) and run 

	brew install pandoc

## Run Pandoc

Open your terminal and go to the class folder

	cd ~/Desktop/openFrameworks/ss2014

And run Pandoc to make a pdf version of the Syllabus

	pandoc README.md --latex-engine=xelatex -o syllabus.pdf

You can use this same command to print other class material that is on Markdown.
 