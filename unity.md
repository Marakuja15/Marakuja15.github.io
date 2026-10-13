---
layout: project
permalink: /unity.html
title: Bee colony simulation
description: A Unity DOTS strategy and simulation prototype focused on simulating a large population of bees and a changing colony economy.
category: PERSONAL PROJECT · UNITY DOTS
summary: A strategy and simulation prototype built around a large population of independently simulated bees.
status: Paused
tools:
  - Unity
  - C#
  - Entities / DOTS
media:
  - type: image
    src: /assets/entities.png
    alt: Bee colony simulation with hive panels and an entity counter showing more than 100,000 entities.
    caption: The simulation running with over 100,000 entities. Click the image to open the full screenshot.
    fit: cover
project_url: https://github.com/Marakuja15/Unity-Dots-BeeStrategy/tree/main
project_link_label: View the project on GitHub
---

## The idea

This Unity DOTS prototype was designed as a real-time strategy game and colony simulation. I wanted to see how far I could take a world with thousands of active bees, a working economy, and changing rules.

## What I built

- Used the C# Job System and Burst Compiler to update large groups of bees in parallel.
- Made a grid-based spatial hash for flower discovery and fog of war.
- Built bee roles and behaviors with ECS components and tags.
- Simulated nectar, wax, and population growth, with laws that change colony behavior.

The original design also included combat, invasions, and more detailed society management. I stopped expanding the project when the scope became too large for a solo developer. The prototype was a useful lesson in DOTS, multithreading, memory management, and keeping a project within reach.
