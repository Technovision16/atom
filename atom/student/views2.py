import json
from json import JSONEncoder
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import *
from django.http import JsonResponse
from django.core import serializers
from django.template import loader
from django.views import generic
from django.core.urlresolvers import reverse_lazy

# Create your views here.
def index(request):
	return render(request, 'student/index.html')


def ayushsehgal(request):
	var = Portfolio.objects.all()
	jsn = serializers.serialize('json', var, fields=('name', 'email'))
	return  JsonResponse(jsn, safe=False)


def login_page(request):
	return render(request, 'student/login.html')


def login(request):
    if not request.user.is_authenticated():
        if request.method == "POST":
            username = request.POST['username']
            print "#########################", username
            password = request.POST['password']
            print request.POST
            user = auth.authenticate(username=username, password=password)
            if user is not None and user.is_active:
                auth.login(request,user)
                return render(request, 'student/welcome.html')
            else:
                return render(request, "student/signup.html",{"error":"Username password mismatch. Can you try with the correct credentials ??"})
        return render(request, 'student/welcome.html')
    else:
        return render(request, 'student/welcome.html')

