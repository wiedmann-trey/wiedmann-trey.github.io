---
title: "Russian Nesting Doll Fabricator"
date: 2025-12-11
description: "Design tool for generating recursively nesting, 3D printable meshes from arbitrary input meshes, inspired by Russian Matryoshka dolls."
tags: ["C++", "Geometry Processing", "Fabrication"]
preview: "/images/matryoshka/bunnies.png"
hero: "/images/matryoshka/demo.mp4"
heroVideo: true
github: "https://github.com/huang-tiffany/matryoshka-doll-deformation/tree/trey-changes"
---

This project presents a design tool for creating 3D prints that fit inside themselves, inspired by Russian Matryoshka dolls. It is built on top of [libigl](https://libigl.github.io/) in C++. Features include mesh sculpting, automatic search for optimal size, and testing of removal feasibility. As part of the project, we used the tool to nest and then 3D print the Stanford bunny mesh.

![](/images/matryoshka/bunnies.png)

This project was completed as a group final project for CSCI2952Y, Special Topics in Computational Design and Fabrication, at Brown University.
