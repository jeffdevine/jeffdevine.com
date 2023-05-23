---
layout: default
title: "Articles"
description: "Expirimenmts and opinions from a hands-on technologist and reformed musician."
---

<div class="bg-white dark:bg-zinc-800 py-8 min-h-screen">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h1 class="text-3xl font-bold tracking-tight text-sky-600 dark:text-gray-200 sm:text-4xl">From the blog</h1>
      <div class="mt-6 space-y-20 lg:space-y-20">
      {% for post in site.posts %}
        <article class="relative isolate flex flex-col gap-8 lg:flex-row">
          <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
            <a href="{{ post.url }}">
              <img src="{{ post.image | relative_url }}" alt="{{ post.image_alt_text }}" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </a>
          </div>
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time datetime="2020-03-16" class="text-gray-500 dark:text-gray-200">{{ post.date | date_to_long_string: "ordinal", "US" }}</time>
              <p class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">{{ post.categories }}</p>
            </div>
            <div class="group relative max-w-xl">
              <h3 class="mt-3 text-2xl font-semibold leading-6 text-gray-800 dark:text-sky-600 hover:text-sky-900">
                <a href="{{ post.url }}">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h3>
              <p class="mt-5 text-lg leading-6 text-gray-600 dark:text-gray-200">{{ post.description }}</p>
            </div>
          </div>
        </article>
      {% endfor %}
      </div>
    </div>
  </div>
</div>
