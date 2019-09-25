from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import UserRateThrottle, AnonRateThrottle
from rest_framework import generics
from .utils import GetStackExchange
from api.models import Questions
from api.serializers import QuestionSerializer


class All_questions_View(APIView):
	def get(self,request,*args,**kwargs):
		page=self.request.query_params.get("page")
		all_ques = GetStackExchange()
		all_ques = all_ques.get_all_questions(page)
		return Response(all_ques,status=status.HTTP_200_OK)


class Query_ques_View(APIView):
	def get(self,request,*args,**kwargs):
		page = self.request.query_params.get("page")
		query = self.request.query_params.get("query")
		ques_qs = Questions.objects.filter(query=query)
		if ques_qs.exists():
			ques_object = ques_qs.first()
			serialized_data = QuestionSerializer(ques_object)
			data = serialized_data.data['data']
			return Response(data,status=status.HTTP_200_OK)
		query_ques_res = GetStackExchange()
		query_ques_res = query_ques_res.search(page,query)
		return Response(query_ques_res,status=status.HTTP_200_OK)

class Advance_search_View(APIView):

	def get(self,request,*args,**kwargs):
		page=self.request.query_params.get("page")
		query=self.request.query_params.get("query")
		print(page,query)
		adv_res = GetStackExchange()
		adv_res = adv_res.advance_search(query,page)
		return Response(adv_res,status=status.HTTP_200_OK)


# class movieDetail(APIView):

# 	def get(self,request,*args,**kwargs):
# 		page=self.request.query_params.get("page")
# 		movieId=self.request.query_params.get("movieId")
# 		detail=get_details(page,movieId)
# 		return Response(detail,status=status.HTTP_200_OK)

# class movieKeyword(APIView):

# 	def get(self,request,*args,**kwargs):
# 		movieId=self.request.query_params.get("movieId")
# 		kind=self.request.query_params.get("type")
# 		movie_keyword=get_all_detail(movieId,kind)
# 		return Response(movie_keyword,status=status.HTTP_200_OK)
