---
title: "Gaussian Splat Viewer"
date: 2026-05-11
description: "Web viewer for Gaussian splats with WebGPU"
tags: ["WebGPU", "TypeScript"]
preview: "/images/gaussian-splat-viewer/stones.png"
hero: "/images/gaussian-splat-viewer/statue.mp4"
heroVideo: true
---

To better understand GPU APIs for the web as well as Gaussian splatting, I implemented a Gaussian splat viewer with WebGPU and TypeScript. I used [antimatter15's](https://github.com/antimatter15/splat) viewer as a reference. The viewer makes use of web workers for depth sorting of Gaussians, running asynchronous from the main render loop. You can try the viewer [here](https://wiedmann-trey.github.io/gaussian-splat-viewer/).

The viewer handles large scenes with millions of Gaussians (though dependent on the strength of your GPU).
<video controls muted preload="metadata">
  <source src="/images/gaussian-splat-viewer/stones.mp4" type="video/mp4">
</video>
