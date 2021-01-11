from django.shortcuts import render 

from rest_framework import viewsets, permissions

from . import serializers
from .models import CustomGroup, CustomUser

class UserViewSet(viewsets.ModelViewSet):
    '''
    API endpoint for viewing or editing users
    '''

    queryset = CustomUser.objects.all().order_by('-created')
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.AllowAny]



class GroupViewSet(viewsets.ModelViewSet):
    '''
    API endpoint for viewing or editing groups
    '''

    queryset = CustomGroup.objects.all().order_by('-name')
    serializer_class = serializers.GroupSerializer
    permission_classes = [permissions.AllowAny]
    