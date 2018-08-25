---
layout: blog
published: true
title: Articles
description: Wolkowski Web Design creates beautiful websites for clients of all sizes. Our blog contains articles about our work and services, and showcases clients and companies we work with!
permalink: /articles
---
{% include _promo.html %}
<div class="fixed-background">
</div>
<div class="parallax-main parallax-blog">
	<h1 class="articles-h1">Articles</h1>

    <div class="content article-list">
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">
    <img src="{% if post.image %}{{ post.image }}{% else %}{{ post.ximage }}{% endif %}" alt="{{ post.image-alt }}" title="{{ post.image-title }}">
      <h3>{{ post.title }}</h3></a>
      <time>{{ post.date | date:"%B %d %Y" }}</time>
        <hr>
      <p>{{ post.content | strip_html | truncatewords: 40 }}</p><a style="font-size: 1.2em;" href="{{ post.url }}"> Read Article</a>
    </li>
  {% endfor %}
</ul>
    </div>
</div>
