---
title: "Multi-GPU Poisson Equation Solver"
date: 2025-12-12
description: "Iterative solving of the 3D Poisson equation distributed across multiple GPUs in a cluster. Custom visualization with OpenGL."
tags: ["C++", "CUDA/HIP", "MPI", "OpenGL", "High-performance computing"]
preview: "/images/poisson/sine.png"
hero: "/images/poisson/sine.mp4"
heroVideo: true
github: "https://github.com/wiedmann-trey/poisson-3d"
---

This project implements a distributed iterative solver for the 3-dimensional [Poisson equation](https://en.wikipedia.org/wiki/Poisson%27s_equation) along with visualization of the solution.

### Features
- Solving distributed among multiple GPUs, coordinated with message-passing interface (MPI).
- Red-black Gauss Seidel update on GPU with AMD's HIP
- Fully configurable solver parameters
- Custom OpenGL tool to visualize and animate the converging solution as a 3D volume.

Experiments were run on AMD's high-performance computing fund cloud. GPU profiling was used to analyze the efficiency and bottlenecks of the solver.

### Gallery

![gpu profiling](/images/poisson/gpu_aware_trace.png)

<video controls muted preload="metadata">
  <source src="/images/poisson/torus.mp4" type="video/mp4">
</video>

<video controls muted preload="metadata">
  <source src="/images/poisson/cosine.mp4" type="video/mp4">
</video>

<video controls muted preload="metadata">
  <source src="/images/poisson/helix.mp4" type="video/mp4">
</video>


This project was completed as a final project for APMA2822B, Introduction to Parallel Computing on Heterogeneous Systems, at Brown University. Read the [full report here](https://github.com/wiedmann-trey/poisson-3d/blob/main/report.pdf).

