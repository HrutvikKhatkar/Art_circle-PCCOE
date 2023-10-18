# Contribution Guidelines:

### Take note of these points
- Check the project's issues to see if the task you want to work on is already being discussed. If it is, you can join the discussion there.

- If the task is not listed, create a new issue to describe what you plan to work on. Please provide a clear and detailed description of the task.

- Mention in the issue that you want to work on it to avoid duplication of efforts.

- Wait for approval from the maintainers of this project before starting your work.

- Once your task is approved, fork the repository.

- Clone your forked repository to your local machine:


- Fork this repo (button on top)
- Clone on your local machine

```bash
  git clone https://github.com/your_username/Art_circle-PCCOE.git
```
- Navigate to project directory.
```bash
  cd ArtCircle_website_hacktoberfest
```
```bash
 git checkout -b my-new-branch
```
- Stage the changes
```bash
 git add .
```
- Commit your changes
```bash 
git commit -m "first commit"
```
- Then push
```bash 
git push origin my-new-branch
```

### Creating a New Pull Request
- Go to the GitHub page of your forked repository and click "New Pull Request."

- Ensure the base repository is the original project repository and the base branch is the main branch.

- In the pull request description, mention the issue number your pull request is related to, and provide any additional context if needed.

- Submit the pull request.

# To Avoid Conflicts {Syncing your fork}
An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.
```bash 
git remote add upstream https://github.com/HrutvikKhatkar/Art_circle-PCCOE_Hacktoberfest.git
```
You can verify that the new remote has been added by typing
```bash
git remote -v
```
To pull any new changes from your parent repo simply run
```bash
git merge upstream/main
```
This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

### Review and Merge
- Wait for a project maintainer to review your pull request. Be prepared to make any requested changes if necessary.

- Once your pull request is approved, it will be merged into the main project repository.

Thank you for your contribution!
