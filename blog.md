---
layout: blog
published: true
permalink: /articles
---
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
      <time>{{ post.date | date:"%d %b %Y" }}</time>
        <hr>
      <p>{{ post.content | strip_html | truncatewords: 50 }}</p>
    </li>
  {% endfor %}
</ul>
    </div>
</div>
