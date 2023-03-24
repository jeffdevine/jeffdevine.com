---
layout: default
title: "Articles"
description: "Expert insights and opinions on the latest trends in technology from a seasoned CTO and hands-on technologist."
---

<div class="bg-white py-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h1 class="text-3xl font-bold tracking-tight text-sky-600 sm:text-4xl">From the blog</h1>
      <p class="mt-2 text-lg leading-8 text-gray-600">Insights and opinions on the latest trends in technology.</p>
      <div class="mt-6 space-y-20 lg:space-y-20">
      {% for post in site.posts %}
        <article class="relative isolate flex flex-col gap-8 lg:flex-row">
          <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            <img src="{{ post.image | relative_url }}" alt="{{ post.image_alt_text }}" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500">{{ post.date | date_to_long_string: "ordinal", "US" }}</time>
              <p class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{{ post.categories }}</p>
            </div>
            <div class="group relative max-w-xl">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-800 hover:text-sky-900">
                <a href="{{ post.url }}">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 text-lg leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="mt-6 flex border-t border-gray-900/5 pt-6">
              <div class="relative flex items-center gap-x-4">
                <img src="{{ site.author.picture | relative_url }}" alt="{{ site.author.name }}'s Headshot" class="h-10 w-10 rounded-full bg-gray-50">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-sky-600">
                    <a href="{{ site.author.bio_link | relative_url }}">
                      <span class="absolute inset-0"></span>
                      {{ site.author.name }}
                    </a>
                  </p>
                  <p class="text-gray-600">{{ site.author.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      {% endfor %}
      </div>
    </div>
  </div>
</div>
