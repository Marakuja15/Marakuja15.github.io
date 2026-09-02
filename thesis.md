[Home](/) | [C++ Engine](engine.html) | [Unity](unity.html) | [Roblox](roblox.html) | [Engineering Thesis Project](thesis.html)

---

## SurvivalScan — Real-Time AI Object Detection Survival Game
**Currently in Development (Engineering Thesis Project)**

A hybrid survival game that bridges the physical and virtual worlds. The core mechanic requires players to use their webcam to scan real-life objects, which are processed in real-time by a Machine Learning model and converted into in-game resources. 

The primary research and engineering goal of this project is to integrate a robust ML object detection pipeline into a game engine while optimizing it for performance on hardware with limited computational power.

#### What I Implemented (So Far)
* **Real-Time ML Integration:** Successfully integrated the YOLOv8 object detection model into Unity using the Unity Inference Engine, processing live WebCamTexture feeds.
* **Event-Driven Architecture:** Designed a decoupled system using C# events (`Action<T>`) where the ML inference module strictly handles detection and broadcasts results to the game logic layer without tight coupling.
* **Dynamic Supply & Demand Economy:** Built a trading system where item values fluctuate based on player behavior (selling specific items crashes their value, while holding them allows the market to recover).
* **SOLID System Design:** Architected the game loop using abstract base classes and polymorphism (e.g., for Unique Items and Encounters) to ensure the codebase remains scalable, modular, and open for extension without modifying core managers.
* **Custom Deterministic RNG:** Implemented a centralized Random Number Generator to ensure predictable, reproducible states for testing complex survival mechanics.

#### The Engineering Challenge
The biggest challenge lies not in the gameplay itself, but in the intersection of real-time AI inference and game loop performance. Running YOLOv8 consistently at a high frame rate alongside game logic requires careful management of GPU readbacks, tensor memory (preventing leaks), and limiting ML execution solely to the necessary "Scavenging Phase."

#### Current Project Status
The foundational architecture, economy, and ML pipeline are fully functional. The current development focus is on fleshing out specific polymorphic classes (concrete Encounters and Unique Items) and building the overarching `DayPhaseManager` to orchestrate the transition between the active camera phase and the UI-driven management phase.

You can follow the progress of this project on my [GitHub](https://github.com/Marakuja15/ProjektInz).