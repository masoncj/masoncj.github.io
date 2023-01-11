---
layout: talk
title: Devops Sandboxes
date: 2022-04-27
icon: sandbox_icon.svg
tags: talk
last_modified_at: 2023-01-11 0:00:00 +0000

---

Sandboxes, not just for kids anymore: use terraform workspaces to test and preview applications.

<!--more-->

**Lightning talk given at Devops Groundup April 2022**

([Meetup page](https://www.meetup.com/portland-devops-groundup/events/284785491/))

Navio makes web apps that help cancer patients and deploys them at Amazon using Terraform. In order to work on multiple features in parallel, and then quickly release them to production, we've created a system of sandbox environments that can be easily created and destroyed. Our solution relies on terraform workspaces, allows backend and frontends to be tested together or separately, and optimizes cost by sharing some components while keeping persistent state separate. We'll describe the system, demonstrate creating a sandbox and solicit ideas about how others solve this problem.

<object class="talk-embed" data="../../images/talks/20220427_sandboxes/20220427_sandboxes.pdf"></object>
<br>([Download PDF](../../images/talks/20220427_sandboxes/20220427_sandboxes.pdf))

