from django.conf.urls import url
from . import views

app_name = 'student'
urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^login/', views.login, name='login'),
	url(r'^ayush$', views.ayushsehgal, name='ayush'),
	url(r'^logout/', views.logout_view, name='logout'),
]