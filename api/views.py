from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from .security_check import info_check, rb_brakeman, py_analysis_bandit, npm_njsscan, rm_repo
from .description import get_description
from .genuineness import genuine_test, check
import json
from os import chdir

# Create your views here.

# def csrf(request):
#     return JsonResponse({'csrfToken': get_token(request)})

@csrf_exempt
def repo_sec(request):
    ret = {"status": "Error"}
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        # repo_url = "https://github.com/p1xxxel/vulnlauncher"
        repo_url = json.loads(body_unicode)['url']
        rm_repo(repo_url)
        info_scan = info_check(repo_url)
        rb_scan = rb_brakeman(repo_url)
        py_scan = py_analysis_bandit(repo_url)
        njs_scan = npm_njsscan(repo_url)
        ret = {"info_scan": info_scan, "rb_scan": rb_scan, "py_scan": py_scan, "njs_scan": njs_scan}
        chdir("../")
        rm_repo(repo_url)
#        ret = {"info_scan": ""}
    return JsonResponse(ret)
#    return JsonResponse(info_check("https://github.com/p1xxxel/vulnlauncher", "abc"))

@csrf_exempt
def repo_gen(request):
    pass

@csrf_exempt
def description(request):
    ret = {"status": "Error"}
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        # print(body_unicode+"\n"*10)
        # repo_url = "https://github.com/p1xxxel/vulnlauncher"
        repo_url = json.loads(body_unicode)['url']
        ret = get_description(repo_url)
    return JsonResponse(ret, safe=False)

@csrf_exempt
def genuineness_check(request):
    ret = {"status": "Error"}
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        # repo_url = "https://github.com/p1xxxel/vulnlauncher"
        # print(body_unicode)
        repo_url = json.loads(body_unicode)['url']
        repo_data = genuine_test(repo_url)
        ret = check(repo_url, repo_data)
    return JsonResponse(ret, safe=False)
