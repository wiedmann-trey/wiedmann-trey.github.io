---
title: "As Rigid As Possible"
date: 2024-12-11
description: "An implementation of the paper \"As-Rigid-As-Possible Surface Modeling\", a technique for deforming 3D meshes while preserving local surface detail."
tags: ["C++", "Geometry Processing"]
preview: "/images/arap/armadillo.png"
hero: "/images/arap/wave.mp4"
heroVideo: true 
---

The paper [As-Rigid-As-Possible Surface Modeling](https://igl.ethz.ch/projects/ARAP/arap_web.pdf) proposed a modeling framework for deforming meshes while preserving local detail. For all local regions of the mesh, the deformation should result in a transformation that is "as rigid as possible" while obeying the target constraints.

This project was an implementation of their proposed algorithm. The algorithm involves setting up and computing a singular value decomposition, as well as setting up and solving a large linear system with a sparse solver. For efficient solving during user interaction, the system is pre-factored, and parallelism with OpenMP is leveraged. The C++ and OpenGL app runs interactively in realtime for any reasonably sized mesh.

<video controls muted preload="none">
  <source src="/images/arap/teapot.mp4" type="video/mp4">
</video>

<video controls muted preload="none">
  <source src="/images/arap/bean.mp4" type="video/mp4">
</video>

This project was completed for CSCI2240, Advanced Computer Graphics, at Brown University. Code is not public, but available at request.
