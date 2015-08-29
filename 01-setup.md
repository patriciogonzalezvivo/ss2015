# Setup

## 1. Install Git and this repository

On a Linux Machine you just need to type:

	sudo apt-get install git-core

But in MacOS you need to install a package manager like [Homebrew](http://brew.sh/) for that follow this instructions

* First install Homebrew: According to their website you just need to open the terminal and type:

```bash
	ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

* Then install Git

```bash
	brew install git
```

## 2. Make a GitHub Account and a repository for your Homework

Create a github account if you don't have one already and create a repo for the class that you'll use to submit your homework.  Name it as follows, '[newSchoolID]_ss2015’ (ex: 'gonzp378_ss2015’ ). 

When you post your homework follow this rules

* **Homework should be organized in folders**: each one using the following structure: ```w[WEEK_NUMBER]_h[HOMEWORK_NUMBER]_[NAME]```.

* **Homework should be self contain**: Inside each homework folder there should be all files needed to execute it, independently it’s just a ```.frag``` and/or ```.vert```, a HTML page using Tree.js or a Processing/OF project.

* **Document your homework**: Each homework folder should have a ```README.md``` file where you: explain the process, doubts, changeless, discoveries, useful links, attribution of borrow code, etc.

* **Present your self**: copy and edit the```03-student_template.md``` and use it as your main ```README.md``` file on the root of your repository.

* **Avoid adding binary files**: Prevent the uploading images or executable files.

* **Keep your repository clean**: remember to add a [```.gitignore```](https://gist.github.com/ofZach/3707086). This will tells git to avoid certain files, such as compiled object code, .app / .exes, etc. It keeps your repos slim and lightweight and helps you avoid committing unnecessary things. (Beside [Zach’s gitignore](https://gist.github.com/ofZach/3707086 you can make your using [this site](http://www.gitignore.io/) ). Also you can use the one from the sims repo. For example, inside your private homework folder do:

At the end your repository should look like something like this:

```
ss2015/
	[your_NID]_ss2015/
		w01_h01_helloWorld/
			hello_world.frag
			README.md
		w01_h02_uniforms/
			uniform.frag
			README.md
		w02_h01_gradients/ 
			…
			…
		w03_h01_blabla/ 
			…
		…/
		…/
		.gitignore
		README.md
 ```

Once this repository is on gitHub send me the url to it.

## 3. Make a local clone of the class repo

On the directory you want to have it just do:

```bash
	git clone https://github.com/patriciogonzalezvivo/ss2015.git
	cd ss2015
	git pull && git submodule init && git submodule update && git submodule status
```

Keep it updated and use it to see each other work.

```bash
	git pull && git submodule init && git submodule update && git submodule status
```

Help and learn from others, then remember to give attribution for what you had receive.
 