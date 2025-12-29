---
title: "Mesh Processing"
date: 2024-12-02
description: "Implementations of various mesh operations, including surface subdivision, simplification, and remeshing."
tags: ["C++", "Geometry Processing"]
preview: "/images/mesh/cowpreview.png"
hero: ""
heroVideo: false
---

This project implements various operations on triangle meshes. The mesh is represented internally with a half-edge data structure. Specifically, [Loop subdivision](https://en.wikipedia.org/wiki/Loop_subdivision_surface), [quadric error simplification](https://www.cs.cmu.edu/~garland/Papers/quadrics.pdf), and [isotropic remeshing](https://www.graphics.rwth-aachen.de/media/papers/remeshing1.pdf) are implemented.

## Loop subdivision
Sphere before and after subdivision:
![sphere before after image](/images/mesh/spheresubdivision.png)
Stanford bunny before and after subdivision: 
![bunny before after image](/images/mesh/bunnysubdivision.png)

## Quadric error simplification
Cow before and after simplification:
![cow before after image](/images/mesh/cowpreview.png)

## Isotropic remeshing
Bunny before and after remeshing:
![bunny before after image](/images/mesh/bunnyremesh.png)

This project was completed for CSCI2240, Advanced Computer Graphics, at Brown University. Code is not public, but available at request.

