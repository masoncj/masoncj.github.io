---
layout: project
title: Pricing Estimate Accuracy Tool
date: 2015-11-10
icon: comparison_tool_icon.png
tags: 
  - Visualization
  - Machine Learning
  - Coffeescript
  - D3
---
Improved accuracy of machine-generated insurance cost estimates through manual curation using this D3- and crossfilter-based visualization tool.
<!--more-->

Counsyl's mission to make genomics useful and accessible to everyone includes making it affordable and understandable.  

{% assign insurance_estimates = site.projects | where: 'slug', 'insurance_estimates' %}

Counsyl prepares an individual [price estimate]({{ insurance_estimates[0].url }}) for each patient based on their unique insurance benefits.  

To ensure that these estimates are accurate, we built a manual review tool that lets us investigate

Manual curation.
The tool also allows speculation about different pricing regimes. 

Drilldown
Filtering


![Comparison Tool Screenshot](/images/projects/comparison_tool/comparison_tool_filter.png)





