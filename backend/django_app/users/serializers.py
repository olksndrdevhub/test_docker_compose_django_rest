from rest_framework import serializers

from .models import CustomGroup, CustomUser



class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['url', 'username', 'group', 'created']


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = CustomGroup
        fields = ['url', 'id', 'name', 'description']