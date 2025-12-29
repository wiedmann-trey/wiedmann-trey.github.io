---
title: "Path Tracer"
date: 2024-12-01
description: "CPU path tracer with support for diffuse, glossy, reflective, and refractive materials, as well as image-based lighting."
tags: ["C++", "Physically-based rendering"]
preview: "/images/pathtracer/refraction.png"
hero: ""
heroVideo: false 
---

This project is a C++ renderer that achieves true global illumination with unbiased path tracing.

### Features
- Unbiased path tracing
- Materials: Diffuse, Glossy Specular, Mirror Reflection, Refraction
- Image-based lighting from HDR images
- Russian roulette path termination
- Next event estimation
- Tone mapping
- Low-discrepancy sampling patterns
- .obj + .mtl file loading
- BVH acceleration
- Configurable render settings from .ini files

### Gallery
![refractive image](/images/pathtracer/refraction.png)
![glossy materials image](/images/pathtracer/hdr_glossy.png)
![boat image](/images/pathtracer/boat.png)
![cathedral image](/images/pathtracer/hdr_cathedral.png)
![cornell box image](/images/pathtracer/mirror.png)

This project was completed for CSCI2240, Advanced Computer Graphics, at Brown University. Code is not public, but available at request.
