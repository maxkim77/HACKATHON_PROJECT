# from django.views.generic import DetailView
#
#
#
# class PostDV(DetailView):
#     template_name = 'blog/post_detail.html'
from django.views.generic import DetailView
from .models import Post  # Post 모델을 임포트해야 합니다.

class PostDV(DetailView):
    model = Post
    template_name = 'blog/post_detail.html'
