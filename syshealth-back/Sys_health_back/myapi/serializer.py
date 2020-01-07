from rest_framework import serializers
from .models import User,Doctor

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ( 'temperature', 'oxygen', 'heartRate', 'breath')

class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Doctor
        fields = ('name')
