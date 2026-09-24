[Home](/) | [C++ Engine](engine.html) | [Unity](unity.html) | [Roblox](roblox.html) | [Engineering Thesis Project](thesis.html)
---
## Custom ECS-based Game Engine (C++ / Raylib)
I am building a 2D game engine from scratch in C++17, using **raylib** for rendering and a hand-written **Entity Component System** as the core architecture. The project is built with CMake and automatically fetches raylib 5.5 via FetchContent.
### How it works
The engine is split into a reusable ECS framework and a game layer that sits on top of it.
An **Entity** is just a lightweight handle consisting of a numeric ID and a generation counter. The generation exists so that when an entity is destroyed and its slot is later recycled for a new entity, any stale references still holding the old generation will not accidentally access the new entity's data.
The **EntityManager** creates and destroys entities. It keeps a contiguous vector of all entity slots and a free list of recycled ones. Creating a new entity first checks the free list; if a slot is available, its generation gets incremented and the slot is reused, otherwise a fresh slot is appended.
Components are stored per type in **ComponentArrays**, each backed by an `unordered_map` from entity ID to component data. A **ComponentManager** owns all these arrays, keyed by `std::type_index`, and lazily creates new ones the first time a component type is used.
**Systems** implement a single `Update(World&)` method. The **SystemManager** separates them into two pipelines, update and render, and runs them in that order each frame so that game logic always processes before drawing.
The **World** class ties everything together behind a clean facade. It exposes methods for creating and destroying entities, attaching and querying components, and a variadic `View<Components...>()` that uses a fold expression to return only the entities possessing every requested component type. It also tracks delta time for frame-independent logic.
In the current demo, a MovementSystem updates the position of every entity that has both a Position and a Velocity component, and the main loop draws all entities with a Position as circles in a raylib window.
### What remains to be done
The `IsAlive` check in EntityManager is declared but not yet implemented, so destroyed entities are not properly filtered from queries yet. This is the most immediate fix needed.
The next major step is replacing the `unordered_map` backing each ComponentArray with a **sparse set**. Sparse sets give the same O(1) insert, remove, and lookup as a hash map, but they store component data in a dense, contiguous array. That makes iterating over all components of a given type a simple linear memory scan instead of chasing hash table buckets, which is dramatically more cache-friendly and faster in practice. This is the single most impactful architectural change on the roadmap.
After that, the engine still needs input handling, asset and resource management, collision detection, audio support, scene management, and a proper sprite rendering system to replace the placeholder circle drawing.
> **Status:** Early development. The core ECS loop is functional and the repository is public on [GitHub](https://github.com/Marakuja15/ECSengine).
