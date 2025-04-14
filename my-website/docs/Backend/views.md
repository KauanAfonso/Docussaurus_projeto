---
sidebar_position: 5
---

# Views

## Introductions 

In **Django REST Framework (DRF)**, views are essential components that handle incoming ````HTTP requests````, interact with ````models```` and ````serializers````, and return **HTTP responses**. 

The views define the **logic** for processing requests and generating responses. There are various ways to implement views in DRF, each providing different levels of abstraction and customization.

For devolop project, is use twice forms of Views. 

## Function-Based Views (FBVs). 

Function-Based Views (FBVs) are the simplest form of views in Django.

They are regular **Python functions** that accept an HTTP request object as an argument and return an HTTP response object.

DRF provides the ````@api_view```` decorator to convert function-based views into API views that understand HTTP methods such as ````GET````, ````POST````, ````PUT````, and ````DELETE````.

`````python
    from rest_framework.response import Response
    from rest_framework.decorators import api_view
    from rest_framework import status

    @api_view(['GET', 'POST'])
    def my_view(request):
        if request.method == 'GET':
            data = {"message": "Hello, world!"}
            return Response(data)
        
        elif request.method == 'POST':
            data = request.data
            return Response({"received": data}, status=status.HTTP_201_CREATED)
`````

>> Example for a **FBV** GET and POST

## Generic Views. 

**Generic Views** in Django REST Framework are designed to handle common patterns such as ````listing````, ````creating````, ````updating````, and ````deleting```` resources. 

**DRF** provides a set of generic views that can be extended to implement basic functionality with minimal code.

````python
    from rest_framework import generics
    from .models import MyModel
    from .serializers import MyModelSerializer

    class MyModelListCreateView(generics.ListCreateAPIView):
        queryset = MyModel.objects.all()
        serializer_class = MyModelSerializer

````

>> Example for a **Generic Views** GET and POST


In DRF there are other types of views, but we will not talk about them.




