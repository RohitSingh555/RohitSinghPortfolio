from django.db import models
from django.core.validators import URLValidator


marital_status_options = (
    ("Single", "Single"),
    ("Married", "Married"),
    ("Divorced", "Divorced"),
    ("Widowed", "Widowed"),
    ("Separated", "Separated"),
    ("Waiting for the one", "Searching"),
)
Ratings = (
    ("G", "G"),
    ("PG", "PG"),
    ("PG-13", "PG-13"),
    ("R", "R"),
    ("NC-17", "NC-17"),
)
body_choice = (('Rectangle','Rectangle'),('Inverted Triangle','Inverted Triangle'),('Hourglass','Hourglass'),('Pear','Pear'),('Apple','Apple'),('Potato','Potato'),('Unidentified','Unidentified'))
       


class Model_Username():
    Username = models.CharField(max_length=200)
    class Meta:
        abstract=True
        ordering=['Username'] 

class Model_info(models.Model):
    Username = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200,null=True, blank=True)
    last_name = models.CharField(max_length=200,null=True, blank=True)
    profile_photo= models.ImageField(upload_to='profilephoto/')
    email = models.EmailField(max_length=200, null=True,blank=True)

    date_of_birth = models.DateField(auto_now_add=False)
    height_feet=models.CharField(max_length=200,null=True, blank=True)
    weight=models.SmallIntegerField(null=True, blank=True)
    bodyshape = models.CharField(max_length = 100,
        choices = body_choice,
        default = 'Unidentified'
        )
    marital_status= models.CharField(
        max_length = 100,
        choices = marital_status_options,
        default = 'Single'
        )
    Profession = models.CharField(max_length=200,null=True, blank=True)
    College = models.CharField(max_length=200,null=True, blank=True)
    approx_followers=models.CharField(max_length=200,null=True, blank=True)
    Country = models.CharField(max_length=200,null=True, blank=True,default='India')
    state = models.CharField(max_length=200,null=True, blank=True)
    city = models.CharField(max_length=200,null=True, blank=True)
    Rating= models.CharField(
        max_length = 100,
        choices = Ratings,
        default = 'G'
        )
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    
    def __str__(self):
         return self.Username



    
class model_details(models.Model):
    models_info = models.ForeignKey(Model_info, on_delete=models.CASCADE)


    @property
    def Username(self):
        return self.models_info.Username
    instagram = models.TextField(validators=[URLValidator()],null=True, blank=True)
    twitter = models.TextField(validators=[URLValidator()],null=True, blank=True)
    snapchat = models.TextField(validators=[URLValidator()],null=True, blank=True)
    youtube = models.TextField(validators=[URLValidator()],null=True, blank=True)
    facebook = models.TextField(validators=[URLValidator()],null=True, blank=True)
    MXtakatak = models.TextField(validators=[URLValidator()],null=True, blank=True)
    chingari = models.TextField(validators=[URLValidator()],null=True, blank=True)
    josh = models.TextField(validators=[URLValidator()],null=True, blank=True)
    moj = models.TextField(validators=[URLValidator()],null=True, blank=True)
    discord = models.TextField(validators=[URLValidator()],null=True, blank=True)
    telegram = models.TextField(validators=[URLValidator()],null=True, blank=True)
    reddit = models.TextField(validators=[URLValidator()],null=True, blank=True)
    unknown = models.TextField(validators=[URLValidator()],null=True, blank=True)
    unknown1 = models.TextField(validators=[URLValidator()],null=True, blank=True)
    unknown2 = models.TextField(validators=[URLValidator()],null=True, blank=True)
    unknown3 = models.TextField(validators=[URLValidator()],null=True, blank=True)
    
    def __str__(self):
         return self.Username
