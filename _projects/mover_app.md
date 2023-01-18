---
layout: project
title: Mover App
date: 2015-01-15
last_modified_at: 2023-01-11 0:00:00 +0000
icon: mover_app_icon.png
tags:
  - project
  - software
  - hardware
  - work
  - visualization
  - robotics
  - coffeescript
  - webgl
---
A WebGL 3D user-interface for training robots!
<!--more-->



Counsyl's mission is to **democratize individual's access to their own genetic information** and make it actionable.  Automation is key to achieving the lowest-in-the-industry cost that enables wider access to genetic testing.  Therefore, Counsyl has multiple robotic work-cells for both DNA extraction and genotyping/sequencing.  Moreover, Counsyl has a unique proclivity towards developing and **owning the entire stack in-house**, from hardware to software to infrastructure.  Counsyl originally employed a commercially available platform from a major robotics vendor to orchestrate the many individual robots and instruments in the cells.  However, glitches were common, performance was limited and customization wasn't possible -- so a custom solution was sought.

I wrote an application that **captures and stores the positions in physical space** where various instruments reside.  A **web user interface allows users to see and connect** these positions into graphs of possible moves.  Finally these paths and poses can be carefully vetted on the actual robots to prevent disaster when real blood and DNA are loaded into the plates and tubes being moved.

See below for more details.

![Mover App Screenshot](/images/projects/mover_app/mover_app_tree.png)
A graph of tube positions on plates.  Among several styles of robot supported by the application, this one shuffles individual microtubes to sort them or compress plates.  The red-square "safe" position in the immediate foreground is selected; color and alpha are used to indicate selection.


#### Implementation Details


* **Server-side**: Python/Django (Counsyl is a Django shop fairly exclusively)
* **Series of Tubes**: REST/JSON via Django Rest Framework
* **Client**: Coffescript/Bootstrap models and logic
* **Visualization**: Scene.JS 3D Scene-Graph library


#### My Role

Mover app was initially implemented as a rotation project in the first several months after joining Counsyl and then continued as a 20% time project when I landed in a different group.

* Interfaced with key stake-holders and gathered requirements.
* Designed data models, API.
* Worked alongside another developer on server-side code.
* Personally implemented entire client UI.
* Performed user-testing and improved user experience.


#### Lessons Learned

*Abstraction is key*: At least two different styles of robot were supported with minimal refactoring.

*Important to leave both conceptual and physical space in UI*: User interface decisions are hard to undo without frustrating users.  Better to get it right the first time or defer the decision to later.