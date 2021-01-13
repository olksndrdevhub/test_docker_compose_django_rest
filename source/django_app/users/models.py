from django.db import models
from django.urls.conf import path
from django.contrib.auth.models import Group

# Create your models here.

Group.add_to_class('description', models.CharField(max_length=180,null=True, blank=True))



class CustomGroup(models.Model):
    '''Group model'''

    name = models.CharField(max_length=100, verbose_name='Name of group')
    description = models.CharField(max_length=200, verbose_name='Description of the group')

    def __str__(self):
        return 'Group: {}'.format(self.name)


class CustomUser(models.Model):
    '''User model'''

    username = models.CharField(max_length=50, verbose_name='Username')
    group = models.ForeignKey(CustomGroup, on_delete=models.CASCADE, verbose_name='Group')
    created = models.DateField(verbose_name='Date of adding the user', auto_now_add=True)

    def __str__(self):
        return 'User: {}'.format(self.username)
