from django.urls import path, include

from rest_framework import routers

from . import views


# Register views
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls)),
]