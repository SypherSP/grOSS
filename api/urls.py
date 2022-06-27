from django.urls import path
from . import views
urlpatterns = [
        path('description', views.des, name='des'),
        path('genuine', views.genuine, name='genuine'),
        ]
