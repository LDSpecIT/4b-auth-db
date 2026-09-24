Class Notes: 

setting up a GitHub Repo

1. Create a new repository on GitHub

2. Run the following commands
    - git init //set up your local project as a git project
    - git add . //begin tracking your files to be committed (starting your changes)
    - git commit -m "YOUR COMMIT MESSAGE" //creating a snapshot of your currently staged changes to put on github
    - git remote add origin https-link //tell git to connect to the remote repo you created earlier
    - git push -u origin master //may be main instead of master -- get your committed changes from your local repo

3. Other Commands that are usefull
    - git config --global user.name "YOUR USER NAME"
    - git config --global user.email "souza.lucianop@gmail.com"
    - git remote set-url origin "CORRECT URL"
    - git status