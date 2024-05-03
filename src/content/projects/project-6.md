---
title: Presentai.net - Online Tools for Biomedical Researchers
description: Presentai.net is a web platform that provides biomedical researchers with practical tools to help them work with documents and research articles, such as the 'Text to Presentation Tool', which converts given text into slides in pptx format and, if selected, enables text summary with ChatGPT; and the 'Pubmed Bulk Abstract Downloader', which allows researchers to download the top 100 abstracts from Pubmed along with the relevant query, creating a word cloud based on article abstracts.
publishDate: 'May 02 2024'
seo:
  image:
    src: '/presentai.gif'
---

![Project preview](/presentai.gif)


**Project Overview:**

[Presentai.net](https://presentai.net) is a web platform that provides biomedical researchers with practical tools to help them work with documents and research articles, such as the 'Text to Presentation Tool', which converts given text into slides in pptx format and, if selected, enables text summary with ChatGPT; and the 'Pubmed Bulk Abstract Downloader', which allows researchers to download the top 100 abstracts from Pubmed along with the relevant query, creating a word cloud based on article abstracts.

## Goals

1. Combining my experiences as both a developer and a researcher to develop simple and useful tools for biomedical researchers
2. Enhance existing workflows by integrating OpenAI API or other LLMs
3. Creating an online platform that can scale with more tools and contributions from relevant people.

## Features

1. **Pdf Text and Image Extraction Tool:**

- This tool allows users to quickly extract the contents of pdf files on a single page and provides the resulting text and images without connecting to a server. So users can upload pdfs without privacy issues.
- It was created with the pdf.js library. 

2. **Text to Presentation Converter Tool:**

- This tool places gven text on slides, splitting to new slides with provided splitters. It aims to prepare a workspace before start working on a presentation. 
- Users can also select option for Chat-GPT to organise and summarise the text into a comprehensive presentation. 
- This tool was created with openai and python-pptx library

3. **Pubmed Batch Abstract Downloading Tool:**

- This tool searches PubMed for the given query.
- Downloads the latest 100 published article abstracts from the results.
- Provides the results in a structured Excel file.
- Creates a word cloud based on the abstracts' text content.

## Technology Stack

- Frontend: Angular v16. TailwindCSS
- Backend: Flask.
- Database: MongoDB.
- API Integration: OpenAI API.
- Server: VPS with Centos 7

## Outcome

[Presentai.net](https://presentai.net) offers simple and useful online tools for biomedical researchers.

