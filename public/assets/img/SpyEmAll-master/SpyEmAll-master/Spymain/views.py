from django.shortcuts import get_object_or_404, render,redirect
from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
from django.http import HttpResponse
from Spymain.models import  Model_info as Details
from Spymain.models import  model_details as links
from django.contrib.auth import authenticate,login
from django.contrib.auth.models import User
from .forms import SignUpForm,LoginForm


def index(request):
    context={}
    data=Details.objects.all()[:20]
    context={
        'model':data,
        'form':UserCreationForm
    }
    return render(request,'index.html',context)

def navigation(request):
    context={
        'form':UserCreationForm
    }
    return render(request,'index.html',context)

def test(request):
    context={}
    data=Details.objects.all()
    context={
        'model':data,
        'form':UserCreationForm
    }
    return render(request,'test.html',context)



 
def signup(request):
    
    context={}
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            user.refresh_from_db()  
            # load the profile instance created by the signal
            user.save()
            raw_password = form.cleaned_data.get('password1')

            # login user after signing up
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)

            # redirect user to home page
            return redirect('/')
    else:
        form = SignUpForm()
    data=Details.objects.all()
    context={
        'model':data,
        'form':form
    }
    return render(request, 'signup.html',context)

def profile(request, id):
    context={}
    data=Details.objects.get(id=id)
    context={
        'model':data,
    }
    return render(request, 'profile.html',context)