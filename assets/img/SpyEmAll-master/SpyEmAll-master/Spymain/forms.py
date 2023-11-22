from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from captcha.fields import CaptchaField
 
class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        
        fields = ('email','username', 'password1', 'password2')
        captcha=CaptchaField()
        
class LoginForm(UserCreationForm):
    class Meta:
        model = User
        
        fields = ('username', 'password')
        