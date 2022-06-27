#!/usr/bin/python
from github import Github
import subprocess
import json
from urllib.parse import urlparse
from .gittyleaks import GittyLeak
import shutil
import os
import errno
from json import JSONDecodeError
from .auxiliar_functions.globals import tmp
from sh import rm

def vuln_check(url, gh_token):
    g = Github(gh_token)
    g = Github(login_or_token=gh_token)
    repo = g.get_repo(urlparse(url).path[1::])
    print(repo)
    contents  = repo.get_contents("")
    check_modules = []
    while contents:
        file_content = contents.pop(0)
        if file_content.type == "dir":
            contents.extend(repo.get_contents(file_content.path))
        else:
            if file_content.path == "requirements.txt":
                modules = file_content.decoded_content.decode('UTF-8').strip().split('\n')
                for module in modules:
                    module = module.split("==")
                    check_modules += [[module[0], module[1]]]
            elif file_content.path == "package.json":
                dependencies = json.loads(file_content.decoded_content.decode('UTF-8'))['dependencies']
                for module in dependencies:
                    check_modules += [[module, dependencies[module].replace("^","")]]

    #print(check_modules)

    for module in check_modules:
        params = ['searchsploit', module[0], module[1]]
        proc = subprocess.Popen(params, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
        output, error = proc.communicate()
        status = proc.wait()
        print(output)

def info_check(repo_url):
    gl = GittyLeak({'link': repo_url})
    gl.run()
    ret_list = []
    for k,v in gl.matched_items.items():
        ret = dict()
        ret['file'] = k[0]
        ret['what'] = k[1]
        ret['value'] = k[2]
        ret['match'] = list(set(x[0] for x in v))
        ret_list += [ret]
    return ret_list

def rb_brakeman(repo_url):
    repo = urlparse(repo_url).path[1::].split('/')
    os.makedirs(tmp, exist_ok=True)
    path = repo[1]
    try:
        subprocess.run(["brakeman",
                        "" + path + "",
                        "--force",
                        "-o",
                        tmp + "/report_brakeman.json"],
                       stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT,
                       shell=False, check=False)
    except OSError as e:
        if e.errno == errno.ENOENT:
            raise OSError('Brakeman not installed')
    except:
        return json.dumps(['Called Process Error'])

    try:
        ret = []
        with open(tmp + '/report_brakeman.json', 'r') as f:
            json_data = json.load(f)
            for result in json_data["warnings"]:
                res_dict = dict()
                res_dict["heading"] = result["warning_type"]
                res_dict["confidence"] = result["confidence"]
                res_dict["filename"] = result["file"]
                res_dict["line_no"] = result["line"]
                res_dict["code"] = result["code"]
                res_dict["description"] = result["message"]
                ret += [res_dict]
                break

    except (FileNotFoundError, JSONDecodeError):
        return json.dumps(['Called Process Error'])

    shutil.rmtree(tmp, ignore_errors=True)
    return ret

def py_analysis_bandit(repo_url):
    repo = urlparse(repo_url).path[1::].split('/')
    os.makedirs(tmp, exist_ok=True)
    path = repo[1]

    try:
        subprocess.run(["bandit",
                        "-r",
                        "" + path + "",
                        "-f",
                        "json",
                        "-o",
                        tmp + "/bandit_report"],
                       stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT,
                       shell=False, check=False)
    except OSError as e:
        if e.errno == errno.ENOENT:
            raise OSError('Bandit not installed')
    except:
        return json.dumps(['Called Process Error'])

    try:
        with open(tmp + '/bandit_report', 'r') as f:
            json_data = json.load(f)
            ret = []
            for result in json_data['results']:
                res_dict = dict()
                res_dict["heading"] = result["issue_text"]
                res_dict["severity"] = result["issue_severity"]
                res_dict["confidence"] = result["issue_confidence"]
                res_dict["cwe"] = result["issue_cwe"]
                res_dict["filename"] = result["filename"]
                res_dict["line_no"] = result["line_number"]
                res_dict["code"] = result["code"]
                ret += [res_dict]
            shutil.rmtree(tmp, ignore_errors=True)
            return ret

    except (FileNotFoundError, JSONDecodeError):
        return json.dumps(['Called Process Error'])

def npm_njsscan(repo_url):
    repo = urlparse(repo_url).path[1::].split('/')
    os.makedirs(tmp, exist_ok=True)
    path = repo[1]

    try:
        subprocess.run(["njsscan",
                        "" + path + "",
                        "--json",
                        "-o",
                        tmp + "/report_njsscan"
                        ],
                       stdout=subprocess.DEVNULL, stderr=subprocess.STDOUT,
                       shell=False, check=False)
    except OSError as e:
        if e.errno == errno.ENOENT:
            raise OSError('Njsscan not installed')
    except:
        return json.dumps(['Called Process Error'])

    try:
        with open(tmp + '/report_njsscan', 'r') as f:
            json_data = json.load(f)
            ret = []
            json_data = json_data["nodejs"]
            for k in json_data:
                ret_dict = dict()
                ret_dict["heading"] = k.replace("_", " ").title()
                ret_dict["severity"] = json_data[k]["metadata"]["severity"]
                ret_dict["cwe"] = json_data[k]["metadata"]["cwe"]
                ret_dict["filename"] = json_data[k]["files"][0]["file_path"]
                ret_dict["line_no"] = json_data[k]["files"][0]["match_lines"][0]
                ret_dict["code"] = json_data[k]["files"][0]["match_string"]
                ret_dict["description"] = json_data[k]["metadata"]["description"]
                ret += [ret_dict]
                break
            shutil.rmtree(tmp, ignore_errors=True)
            return ret

    except (FileNotFoundError, JSONDecodeError):
        return json.dumps(['Called Process Error'])

def rm_repo(repo_url):
    repo = urlparse(repo_url).path[1::].split('/')
    rm('-rf', repo[1])

#print(info_check("https://github.com/prayutsu/cflockout", "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"))
#node_source = "/home/p1xel/Documents/nss_test"
#print(rb_brakeman("https://github.com/p1xxxel/vulnlauncher"))
#analysis = py_analysis_bandit("/home/p1xel/Documents/nss_test")
#print(analysis)
