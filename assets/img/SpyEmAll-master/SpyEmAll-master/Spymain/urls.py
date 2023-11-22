from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("navigation/", views.navigation, name="navigation"),
    path("test/", views.test, name="test"),
    path('signup/', views.signup, name='signup'),
    path('profile/<str:id>/', views.profile, name='profile'),
    
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)