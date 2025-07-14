---
date: '2'
title: 'Scalable Forecasting Platform - Distributed Inference Service'
cover: './scalable_ts_inference_arch.png'
github: 'https://github.com/nnn007'
external: 'https://github.com/nnn007'
tech:
  - FastAPI
  - Kubernetes
  - AWS
  - Redis
  - Machine Learning
---
A scalable forecasting service with FastAPI, Docker and Kubernetes, supporting inference for over 10k time series. Created clustering pipeline using DTW + DBSCAN, improving grouping efficiency by 40% over KMeans, reducing redundant model runs and cutting inference cost by 5× via global model deployment with batched inference using Redis queues.
