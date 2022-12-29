---
layout: post
title: Solving for offsets, a Kafka challenge
date: 2022-10-31
icon: sneaker.png
tags: tech kafka practical
---

Overcoming some technical challenges in our use of Kafka required rethinking how we keep track of where we are

<!--more-->

Transactional

Commit which messages have been read

[Transactional outbox](https://microservices.io/patterns/data/transactional-outbox.html) further strengthens this transactional behavior

Kafkacat

