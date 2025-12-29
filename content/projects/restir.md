---
title: "Realtime Path Tracing with ReSTIR"
date: 2024-12-26
description: "ReSTIR direct illumination implemented on top of an OpenGL path tracer for realtime rendering of scenes with large numbers of lights."
tags: ["C++", "OpenGL", "Physically-based rendering"]
preview: "/images/restir/preview.png"
hero: ""
heroVideo: false
github: "https://github.com/evan-mick/2240-restir"
---

In this project, we implement the paper [Spatiotemporal reservoir resampling for real-time ray tracing
with dynamic direct lighting](https://research.nvidia.com/publication/2020-07_spatiotemporal-reservoir-resampling-real-time-ray-tracing-dynamic-direct), or ReSTIR direct illumination, on top of an existing OpenGL path tracer. ReSTIR enables the accurate rendering of scenes with many lights very low sample counts, which allows our path tracer to render in real time. It works through the resampled importance sampling (RIS) of candidate light samples and the reuse of samples from spatial and temporal neighbors.

### Gallery

![ris comparison](/images/restir/ris.png)
![restir comparison](/images/restir/preview.png)
![denoising comparison](/images/restir/denoiser.png)
![candles comparison](/images/restir/candles1.png)
![candles comparison 2](/images/restir/candles2.png)
![cornell box comparison](/images/restir/cornell.png)
![many lights](/images/restir/1000_lights.png)
![armadillo comparison](/images/restir/armadillo_restir.png)

This project was completed as a group final project for CSCI2240, Advanced Computer Graphics, at Brown University.

