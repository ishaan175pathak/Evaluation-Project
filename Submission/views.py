from django.shortcuts import render, redirect
from django.urls import reverse

# Create your views here.

def index(request):
    if request.method == "GET":
        return render(request, "index.html", {'consent_text': ""})
    
def emailSubmssion(request):
    if request.method == "GET":
        return render(request, "emailSubmission.html")

def demographicQuestions(request):
    if request.method == "GET":
        return render(request, 'demographicQuestions.html')