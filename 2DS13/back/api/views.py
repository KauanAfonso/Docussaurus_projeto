from django.shortcuts import render
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def listar_professores(request):
    if request.method == 'GET':
        queryset = Cadastro.objects.all()
        serializer = CadastroSerializer(queryset, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CadastroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def buscar_nome_professor(request):
    if request.method == 'GET':
        termo = request.query_params.get('nome', '')
    else:
        termo = request.data.get('nome', '')

    if termo:
        professores = Cadastro.objects.filter(nome__icontains=termo)
    else:
        professores = Cadastro.objects.all()
    
    serializer = CadastroSerializer(professores, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



class ProfessoresView(ListCreateAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]

class ProfessoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]

class ProfessoresSearchView(ListAPIView):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['nome']

class DisciplinasView(ListCreateAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]

class DisciplinaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Disciplinas.objects.all()
    serializer_class = DisciplinaSerializer
    permission_classes = [IsAuthenticated]

class AmbientesView(ListCreateAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]

class AmbienteDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    permission_classes = [IsAuthenticated]

class CursosView(ListCreateAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]

class CursoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer
    permission_classes = [IsAuthenticated]

class TurmasView(ListCreateAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]

class TurmaDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer
    permission_classes = [IsAuthenticated]

