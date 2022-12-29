---
layout: post
title: Event Arch Something
date: 2022-12-29
icon: sneaker.png
tags: post architecture tech 

---

Early architecture decisions are durable so Navio engineered for long term value.

<!--more-->

Navio is a health tehnology company making tools that let cancer patients better understand and stay on track their care.  Over time, Navio collects valuable insights into how these patients are doing and what is working well for them.  This information ultimately helps pharmaceutical and diagnostic companies improve care for everyone.

A key early technical insight at Navio was that the data we collect is inherently time-based. Medical care is highly episodic: it occurs at specific but disconnected points in time. Our knowledge of this care is similarly fragmented or fractured. It's not enough, for instance, to keep track of what medicines a patient is currently supposed to be taking, but we must also know how their prescriptions and adherence to taking these drugs have changed over time.  In short, where we've been is as important as where we are.  This river of time-based knowledge is a core part of the value we provide and must be kept forever.  

Because of this, we architected Navio's core platform with time in mind. 

[Diagram river of data.]

Moreover, I've observed that early architecture choices tend to be durable: it is seldom a good idea and often not even feasible to rebuild everything from the ground up.  It's necessary to make changes while the plane still flies. If you start off with a [big ball of mud](http://www.laputan.org/mud/mud.html), that's likely where you'll remain. So, some time invested in early choices about the eventual system organization and code structure can pay dividends later.  You don't have to be architecture astronaut and you can evolve to the desired architecture over time, as we'll see.

(Organization drives architecture)

"event" 

When we say event, we don't just mean things that you would put on a calendar.  Thought, we did learn, from talking to many oncologists, that calendars are a core piece of the value....

An Event in this context is a statement of something that was true about the world at a point in time. Events are often defined in the past tense: `TreatmentPrescribed`, `MedicineTaken`, `TaskCompleted`, etc.  As such, events are immutable and unchanging: they were true at the point in time where they were collected and we keep this historical record forever. This isn't to say, however, that our understanding won't change in the future; when it does we'll record more events that reflect our updated or improved knowledge.  Because of this we often will need to integrate or rectify (Flightstats, Zack)

So instead of storing the current relationship

<img src="../../images/posts/event_arch/Relationship Patient is Taking.svg" alt="Relationship Patient is Taking">

We instead store a statement about what was true at the time

![Event Treatment Occurred](../../images/posts/event_arch/Event Treatment Occurred.svg)

We can then denormalize to the current state as needed (see below).



An event based architecture then passes events around as the core way of communicating between differnt parts of the system. Going further, an [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html) system uses a log of events as the core data structure and source of truth in our systems.



This log is durable and immutable. 

This is not a new idea.

[Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) by Martin Kleppmann

[Data on the Outsie Helland](https://www.cidrdb.org/cidr2005/papers/P12.pdf)  







Did a great deal of reading.  Key objections: 



We are not dogmatic about it: several core services use more traditional REST-based transactional 

We also did not Incremental implementation :  At first, we stored the log of events in a postgres table.

Eventually we used Kafka as our durable log.



**Advantages**

Democratizing Teams can consume from central log independently.  Also lets teams organize around customers rather than around data.  Can spin up new apps or services that can efficiently (for instance staring with the last 6 months and progressively further)  (*diagram of teams*)

Asynchronous and resilient: decouples various parts of the system (such as those serving different kinds of users) from each other so they can continue to operate independtly in the event of a failure of one part.  

Debuggability

Different services can have different organizations of data 



**Challenges**

Asynchronous and eventually consistent

Kafka

Topics and ordering

Magic



Technical articles:

* API design; success around 
* Kafka offsets and cloning practicum
* Ordered consumption and migrations (Viktor)
* Schemas
* Debugging example?
* GDPR and right to be forgotten -- crypto shredding
* Build a toy event sourcing system in python?

How to make architecture decisions?

