from github import Github
import json

def get_description(github_url):
    g = Github()
    # github_url = "https://github.com/p1xxxel/vulnlauncher"
    name_repo = github_url.split("/",3)[3]
    repo = g.get_repo(name_repo)
    repo_owner = github_url.split("/",4)[3]
    name = github_url.split("/",4)[4]
    description = repo.description
    date_creation = repo.created_at
    number_forks = repo.forks
    star_count = repo.stargazers_count
    subscriber_count = repo.subscribers_count
    repo_commits = repo.get_commits().totalCount

    out = {
        "Repository Name":name_repo,
        "Author":repo_owner,
        "Description":description,
        "Number of Stars":star_count,
        "Number of Watchers":subscriber_count
    }
    return json.dumps(out)
