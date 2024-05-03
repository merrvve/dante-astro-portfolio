---
title: 'Working Schedule Generator'
description: It is a personal side project developed due to the need for an automatic tool that allows the creation of task lists, taking into account the days when not every doctor is available.
publishDate: 'Mar 19 2024'
seo:
  image:
    src: '/doktor-nobet.gif'
---

![Project preview](/doktor-nobet.gif)

# Application for preparing duty lists for doctors

**Project Overview:**
It is a personal side project developed due to the need for an automatic tool that allows the creation of task lists, taking into account the days when not every doctor is available.

## Features:
- Prepares a list for 24-hour shifts for a month
- Can assign more than one doctor per day
- Can assign more than one type of doctor per day
- Considers weekends and other holidays and calculates them separately
- Considers the days when the doctors are not available
- Selects a doctor randomly if no one is available for a particular day

Features to be Added:
- Improving the duty list visually and exporting it to Excel
- Bug fix for multiple types of doctors list 

## Tech Stack

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.
- PrimeNG and PrimeFlex were used for UI development
