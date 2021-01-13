from django.http.response import HttpResponse
from django.contrib.auth.models import User, Group

from rest_framework import viewsets, permissions

from . import serializers
from .models import CustomGroup, CustomUser

class UserViewSet(viewsets.ModelViewSet):
    '''
    API endpoint for viewing or editing users
    '''

    # queryset = CustomUser.objects.all().order_by('-created')
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.AllowAny]



class GroupViewSet(viewsets.ModelViewSet):
    '''
    API endpoint for viewing or editing groups
    '''

    # queryset = CustomGroup.objects.all().order_by('-name')
    queryset = Group.objects.all().order_by('-name')
    serializer_class = serializers.GroupSerializer
    permission_classes = [permissions.AllowAny]
    


def index(request):

    return HttpResponse('<h1>Go to <a href="/api">/api</a> URI</h1>')