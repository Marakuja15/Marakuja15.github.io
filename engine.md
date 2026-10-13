---
layout: project
title: C++ game engine
description: An early-stage 2D game engine built in C++17 with raylib and a custom entity-component-system architecture.
category: PERSONAL PROJECT · C++ / RAYLIB
summary: A small 2D engine built from scratch, exploring entity-component-system architecture and the foundations of a game loop.
status: Early development
tools:
  - C++17
  - raylib
  - CMake
project_url: https://github.com/Marakuja15/ECSengine
project_link_label: View the source on GitHub
---

## What it is

I’m building a small 2D game engine from scratch in C++17, with raylib handling the window and rendering. The project is a way to learn how a game engine can be structured, starting with the entity-component-system (ECS) architecture.

## What’s in the current build

The engine separates entity management, component storage, and systems. Entities use an ID and generation counter so recycled slots can be distinguished from stale references. A `World` ties these pieces together and lets systems query entities by their component types.

The demo has a movement system that updates entities with position and velocity components, then draws positioned entities in a raylib window. The project builds with CMake and fetches raylib 5.5 through CMake FetchContent.

## Next steps

The entity-alive check is not implemented yet, and component data still uses hash maps. I plan to address those pieces before expanding the engine with input, resource management, collision, audio, scenes, and sprite rendering.
