---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
<h3>{{ currentdate }}</h3>
    {% assign date = currentdate %}
  {% endif %}
  {% include archive-single-publication.html %}
{% endfor %}
