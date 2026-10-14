---
layout: project
permalink: /unity.html
title: Bee colony simulation
description: A paused Unity DOTS colony simulation exploring bee behaviour, flower discovery, and large-scale entity performance.
category: PERSONAL PROJECT · UNITY DOTS
summary: A Unity DOTS colony simulation focused on bee behaviour, exploration, and entity performance.
status: Paused · no longer updated
media_layout: stories
tools:
  - Unity
  - C#
  - Entities / DOTS
  - Burst
media:
  - type: video
    src: /assets/videos/bee-scouts-and-pollinators.mp4
    caption: Scouting and pollen collection
    description:
      - >-
        Every bee receives both the Scout and PollenCollector tags when it spawns. The bees in this video are not separate scout and pollinator groups: each bee has both roles.
      - >-
        A PollenCollector searches for an available flower in its current grid cell and the eight neighbouring cells. The flower is reserved as soon as the system assigns it as a target, before the bee arrives. That can make a flower look empty even though other bees already know it is taken.
      - >-
        If there is no available flower nearby, the Scout behaviour sends the bee to discover another grid cell. A cell is discovered as a bee flies through it. Once there are no undiscovered cells left, bees keep looking for flowers across the known area.
      - >-
        A bee with only the PollenCollector tag would stay in place and retry its local search; a bee with only the Scout tag would explore without collecting pollen. Every bee shown here combines both behaviours.
  - type: video
    src: /assets/videos/bee-flower-switching.mp4
    caption: Switching to another flower
    description:
      - >-
        When a bee uses all the nectar in its current flower, it immediately searches for another available flower.
  - type: video
    src: /assets/videos/bee-queued-spawning.mp4
    caption: Queued entity creation
    description:
      - >-
        To avoid frame-time spikes when creating many bees at once, the spawning script queues entity creation and processes up to 500 entities per frame. Large spawn requests are spread over multiple frames instead of being created all at once.
  - type: video
    src: /assets/videos/bee-130-bees-1000-flowers.mp4
    caption: 130 bees and 1,000 flowers
    description:
      - >-
        With 130 bee entities and 1,000 flowers in the simulation, the game stays above 30 FPS in this recording. My laptop is not designed for demanding games and currently has faulty RAM, so performance will vary with the hardware.
  - type: video
    src: /assets/videos/bee-average-fps.mp4
    caption: Average FPS at different entity counts
    description:
      - >-
        This clip shows the average frame rate as the number of entities changes. The results are specific to my current laptop, which has faulty RAM, and will differ on other hardware.
  - type: image
    src: /assets/entities.png
    alt: An earlier bee simulation capture with more than 100,000 ECS entities.
    caption: Earlier stress-test capture with 100,000+ ECS entities, recorded on a different machine better suited to this workload. This is separate from the 130-bee clip.
    fit: cover
project_url: https://github.com/Marakuja15/Unity-Dots-BeeStrategy/tree/main
project_link_label: View the project on GitHub
---

## The idea

I started this project as a real-time strategy game and bee-colony simulation. I wanted to build a world with a large bee population, a working economy, and rules that could change how the colony behaved. The original scope also included combat, invasions, and deeper society management.

## What I built

- Used the C# Job System and Burst Compiler to update large groups of bees in parallel.
- Built a grid-based spatial hash for flower discovery and fog of war.
- Implemented bee roles and behaviours with ECS components and tags.
- Simulated nectar, wax, and population growth, with laws that affect colony behaviour.

## Project status and visual assets

The project is no longer being updated. I stopped expanding it when the scope became too large for a solo developer. The visual assets used in the project are not my work.
