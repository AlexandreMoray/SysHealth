from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializer import UserSerializer, DoctorSerializer
from .models import User, Doctor


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('id')
    serializer_class = UserSerializer
class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all().order_by('name')
    serializer_class = DoctorSerializer
