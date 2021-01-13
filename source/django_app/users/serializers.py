from django.db import models
from rest_framework import serializers
from django.contrib.auth.models import User, Group

from drf_writable_nested.serializers import WritableNestedModelSerializer

from .models import CustomGroup, CustomUser



class GroupSerializer(WritableNestedModelSerializer):

    # users = serializers.ReadOnlyField(source='user_set.first')
    
    is_user_binded = serializers.BooleanField(source='user_set.first', allow_null=True, read_only=True, default=True)

    class Meta:
        # model = CustomGroup
        model = Group
        fields = ['url', 'id', 'name', 'description', 'is_user_binded']
        extra_kwargs = {
            'name': {'validators': []},
        }


class UserSerializer(WritableNestedModelSerializer):

    groups = GroupSerializer(many=True, required=False)
    created = serializers.ReadOnlyField(source='date_joined')

    class Meta:
        # model = CustomUser
        model = User
        fields = ['url', 'id', 'username', 'groups', 'created']



