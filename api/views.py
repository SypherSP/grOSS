from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token
# from .security_check import info_check, rb_brakeman, py_analysis_bandit, npm_njsscan, rm_repo
from .description import descrip
from .genuineness import genuine_test, check

# Create your views here.

def des(request):
    ret = {"status": "Error"}
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        # repo_url = "https://github.com/p1xxxel/vulnlauncher"
        repo_url = json.loads(body_unicode)['url']
        ret = descrip(repo_url)
    return JsonResponse(ret, safe=False)

def genuine(request):
    ret = {"status": "Error"}
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        # repo_url = "https://github.com/p1xxxel/vulnlauncher"
        repo_url = json.loads(body_unicode)['url']
        repo_data = genuine_test(repo_url)
        ret = check(repo_url, repo_data)
    return JsonResponse(ret, safe=False)
