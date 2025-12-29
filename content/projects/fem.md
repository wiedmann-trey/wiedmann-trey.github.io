---
title: "Soft Body Simulator"
date: 2024-12-02
description: "Realtime soft body physics simulation of tetrahedral meshes with the finite element method."
tags: ["C++", "Simulation"]
preview: "/images/fem/stack.png"
hero: "/images/fem/stack.mp4"
heroVideo: true
---

This project implements realtime soft body physics simulation of tetrahedral meshes using the finite element method. 


<video controls muted preload="none">
  <source src="/images/fem/sphere_collision.mp4" type="video/mp4">
</video>

Penalty forces are used to resolve collisions, and deformable meshes can collide with static meshes and other deformable meshes. Explicit integration with the midpoint method is used to update the simulation at each timestep. Any number of meshes is supported, and initial configuration and simulation parameters are configurable from .ini files. 

<video controls muted preload="none">
  <source src="/images/fem/static_collider.mp4" type="video/mp4">
</video>

This project was completed for CSCI2240, Advanced Computer Graphics, at Brown University. Code is not public, but available at request.
