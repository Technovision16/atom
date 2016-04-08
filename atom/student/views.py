import json
from json import JSONEncoder
from django.shortcuts import render
from django.http import HttpResponse
from .models import Portfolio
from django.http import JsonResponse
from django.core import serializers

# Create your views here.
def index(request):
	var = Portfolio.objects.all()
	jsn = serializers.serialize('json', var)
	return JsonResponse(jsn, safe=False)
