from django.shortcuts import render
from rest_framework import generics, status
from .serializers import SearchSerializer

from .models import Search
# Create your views here.

class SearchView(generics.ListCreateAPIView):
    model = Search
    serializer_class = SearchSerializer
