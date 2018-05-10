---
layout: blog
published: true
title: Articles
description: Wolkowski Web Design creates beautiful websites for clients of all sizes. Our blog contains articles about our work and services, and showcases clients and companies we work with!
permalink: /articles
---
<div class="fixed-background">
</div>
<div class="scroll scroll-blog">
	<h1>Articles</h1>

    <div class="content article-list">
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">
      {% assign foundImage = 0 %}
      {% assign images = post.content | split:"<img " %}
      {% for image in images %}
        {% if image contains 'src' %}

            {% if foundImage == 0 %}
                {% assign html = image | split:"/>" | first %}
                <img {{ html }} />
                {% assign foundImage = 1 %}
            {% endif %}
        {% endif %}
      {% endfor %}

      <h3>{{ post.title }}</h3></a>
      <time>{{ post.date | date:"%B %d %Y" }}</time>
        <hr>
      <p>{{ post.content | strip_html | truncatewords: 40 }}</p><a style="font-size: 1.2em;" href="{{ post.url }}"> Read Article</a>
    </li>
  {% endfor %}
</ul>
    </div>
</div>
