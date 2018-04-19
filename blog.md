---
layout: blog
published: false
permalink: /article
---
<div class="scroll scroll-blog">
	<h1>Articles</h1>
</div>

<div class="scroll scroll-block">
    <div class="content">
        <ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
    </div>
</div>
