from django.contrib import admin

# Register your models here.
from .models import Model_info, model_details

admin.site.register(Model_info)
admin.site.register(model_details)