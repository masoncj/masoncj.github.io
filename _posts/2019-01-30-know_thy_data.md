---
layout: post
title: Know Thy Data
date: 2019-01-25
icon: sneaker.png
tags: 

---

Insight comes from a deep dive into your data.

<!--more-->

You can't do data analysis without data. Lots of it.  Moreover, making sense of complex data requires not only powerful analytic techniques and algorithms, but also a lot of blood sweat and tears.  It's tempting to think that, given a pile of data and a sophisticated machine learning algorithm, you should be good to go.

I've met data scientists and analysts who treat data like interchangeable widgets and have a favorite algorithm or tool that they wield like a hammer.  Data, these people say, is all the same.  They say, I can look at the shape of a distribution, or at a summary statistic and know how my algorithm is performing. 


In my experience, true insight comes only by steeping yourself, immersing yourself, drowning yourself in your data.  Algorithms only take you so far.  
To really understand 
For a complex algorithm with a lot 
In my experience, true 
this means looking at just tons and tons of data.  With your own eyeballs.  

Tuning algorithm performance on complex datasets takes looking at hundreds if not thousands of example data points. How many depends on how complex and varied the error cases are.  Can you identify all error cases via a per-element metric (like a fit score or an error figure)? Or are there cases that you only find later, when some downstream process fails? Can you adjust your fitness metric to detect these cases?


More more more examples



## Process

It's important to establish a solid process for algorithm refinement.  Not every dataset will work exactly the same, but I've found the following basic outline to be very helpful.  This is an iterative process: 


![Process Diagram](../images/posts/2019-01-30-know_thy_data/process_overview.svg)
![Process Diagram ](/images/posts/2019-01-30-know_thy_data/process_overview.svg)


### Examine overall metrics and graphs


The metrics
Usually, simpler is better.

Examples: 



### View annotated examples


It's critical to have a tool that allows you to really look at how your algorithm performs on your data.  To look at actual examples, many of them, in order to generalize





Typically such a tool starts with raw data, in whatever form and format is most appropriate.  This could be a spectrum or an annotated sequence of reads, or...  If your algorithm operates on genomic sequence data (such as a base caller), this is likely a pileup viewer like [IGV](http://software.broadinstitute.org/software/igv/alignmentdata#coverage).  If it's proteomics data, this is likely your vendor's spectral data viewer, but it might be a more specific tool like [Scaffold]() or __.  If you're doing image recognition, this is likely an annotated image viewer, but it might be a simulation tool or even a game engine.  

<img src='http://software.broadinstitute.org/software/igv/sites/cancerinformatics.org.igv/files/hovercoverage2.png' height='250'>
<img src='http://www.proteomesoftware.com/images/elements_samples_view.png' height='200' title='IGV'>
<br>
*On the left*: IGV sequence viewer showing a pileup.  *On the right*: Scaffold Mass Spec data viewer.

Often, you'll find yourself in a domain where such a tooldoes not yet exist.  


You need to be able to move from a high level quality control graph or summary visualization down to an individual data in no more than a second.  This is because you'll need to look at hundreds, or even thousands of examples.
Sometimes, you can implement the high level view, but



Some of the tools I've created include the [Pricing Comparison Tool](), used to 

By clicking on any of these circles, you 
Links to 

For another project, I created an annotated spectrum viewer, that 
This plugged into the data visualization tool Spotfire, to
Spotfire has excellent 
and can handle hundreds of thousands to millions of points.

I started
but did not get nearly as far as I would have liked


### Challenges

Integration

### Things to investigate
Interactive iPython?