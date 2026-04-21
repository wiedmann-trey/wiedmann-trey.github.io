
---
title: "3D Game Engine"
date: 2026-04-06
description: "Custom C++ 3D game engine centered around an ECS implementation, featuring collisions, animations, etc."
tags: ["C++", "OpenGL"]
preview: "/images/3d-game-engine/penguin-preview.png"
hero: "/images/3d-game-engine/penguin.mp4"
heroVideo: true
---

This ongoing project is a custom C++ game engine. It also features some games created with the engine to demonstrate its capabilities.

<video controls muted preload="metadata">
  <source src="/images/3d-game-engine/pathfinding.mp4" type="video/mp4">
</video>

### Features
- Custom ECS implementation for game logic
- GJK+EPA collision detection for convex hulls
- Analytical collision detection for primitive shapes
- BVH for acceleration of collision detection with static environment
- Uniform grid for acceleration of collision detection between dynamic objects
- Animations for skinned meshes
- Pathfinding on navigation meshes with A* + funnel algorithm
- Behavior trees for character AI
- Rendering with OpenGL
- Frustum culling
- Automatic logging of per-system performance

<video controls muted preload="metadata">
  <source src="/images/3d-game-engine/bonfire.mp4" type="video/mp4">
</video>

This is an ongoing project for CS1950U: 3D Game Engines, at Brown University. Source code is not publicly available at this time.
