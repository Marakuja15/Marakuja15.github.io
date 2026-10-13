---
layout: project
permalink: /thesis.html
title: SurvivalScan
description: An engineering thesis project combining a survival game, webcam input, and real-time object detection in Unity.
category: ENGINEERING THESIS · IN DEVELOPMENT
summary: A survival game where objects seen through a webcam become in-game resources using real-time object detection.
status: In development
tools:
  - Unity
  - C#
  - YOLOv8
  - Unity Inference Engine
project_url: https://github.com/Marakuja15/ProjektInz
project_link_label: Follow the project on GitHub
---

## The idea

SurvivalScan connects a game to the physical world. During a scavenging phase, the player scans real objects with a webcam. A machine-learning model identifies them and turns the detections into resources for the game.

The engineering challenge is fitting real-time inference into a responsive game loop, including careful handling of GPU readbacks and tensor memory. The model only needs to run during the scavenging phase, which helps keep the rest of the game free to run normally.

## What I’ve built

- Integrated YOLOv8 object detection with a live `WebCamTexture` feed through the Unity Inference Engine.
- Kept detection separate from game logic with C# events, so the inference code reports results without owning gameplay decisions.
- Built a supply-and-demand trading system where selling an item affects its value and holding it lets the market recover.
- Used shared base classes for encounters and unique items, and a centralized deterministic random-number generator for repeatable behavior.

## Current focus

The detection pipeline, core architecture, and economy are in place. I’m working on concrete encounter and item types, then a `DayPhaseManager` to coordinate scavenging with the management phase.
