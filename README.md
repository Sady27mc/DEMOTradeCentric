

# README CONTENTS:

1. Cypress automated test scripts can be found in the following folder:
```
cypress/e2e 
```

2. README document contains:
- Instalation guide for NPM;
- Cypress instalation and running guide;
- Encountered issues and suggested solutions;

# Requirements
To run this project you will need NodeJS installed on your system (v20 or newer).

# Set-up and run

1. Install requiremets using NPM. Run this terminal command from root of project:

```
npm i
npm install cypress --save-dev
```

> npm i - installs all the dependencies listed in package.json

> npm install cypress --save-dev - installs cypress and updates package.json to contain it


2. To run Cypress simply execut this terminal command from the root of the project:

```
npx cypress open
```



# Git Steps from VSCode

1. When opening VSCode, before any moddification on files, make sure you are in main branch;
2. Fetch;
3. Pull  in order to have a sync between github and local;
4. Create new branch (Now you can start working/changin code);
5. Do a commit with a relevant message;
6. Do a push;
7. Go to Github and find the new commit notification;
8. Create a merge pull request from Github;
9. Review the code and approve it.;
10. Going back to VSCode, make sure to change from the created branch to main branch;
11. Repeat from step 2 onwards.

# Git Steps from terminal

1. `git checkout main`
2. `git fetch`
3. `git pull`
4. `git checkout -b [branch_name_you_want]`
5. `git commit -m [relevant message for the commit]`
6. `git push`
7. Go to Github and find the new commit notification;
8. Create a merge pull request from Github;
9. Review the code and approve it;
10. Repeat from step 1.


# Encountered issue:

1. **Cypress uncaught error in application code** - Caused Cypress tests to fail at different steps without a repo.

Solution: Added a Cypress function to each script to prevent them from failing whenever the tests encounter an uncaught error.

2. **Widgets section buttons issue** - It was impossible for me to automate/click on the Widgets buttons from the left side dropdown due to them being hidden and having more than 6 elements in the same span.

Suggested Solution: Have unique identifiers/classes or id's for each button in order for the automated scripts to be able to call them.