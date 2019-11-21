from django.shortcuts import render

# Create your views here.
def index(request):
	return render(request, 'eth/index.html')

def bet(request):
	return render(request, 'eth/bet.html')

def about(request):
	return render(request, 'eth/about.html')

def contact(request):
	return render(request, 'eth/contact.html')