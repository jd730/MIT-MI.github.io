---
name: "Multisensory Foundation Models, Reasoning, and Agents"
description: "Large language and foundation models grounded in real-world sensory modalities for open-ended prediction, question answering, reasoning, multi-turn interaction, and rapid generalization to new problem settings."
tags: []
people: [ao, alexw, chanakya, lucy, david]
image: "./cover.png"
---

The next generation of foundation models will be multisensory, being able to process, reason, and interact over modalities such as text, images, video, speech, time-series, sensors, and more. Our group leads today’s research in curating large-scale multimodal datasets to train and evaluate foundation models, developing effective and efficient training paradigms, enhancing reasoning to solve complex multimodal problems, and developing interactive multimodal agents for multi-turn problems.

We have built a series of models to learn from multimodal sequences such as dialog, speech, videos, medical time series, and physical sensors. While prior work often summarized temporal modalities into static features for fusion, we developed new methods for temporal fusion at the fine-grained level. These were among the first cross-modal attention mechanisms and Multimodal Transformer architectures now widely used in today's foundation models. Our work in high-modality models (HighMMT) further paved the way towards generalist multimodal intelligence that scales across an unprecedented range of modalities and skills, while robustly handling missing modalities. Finally, holistic benchmarks are key to training and rigorously evaluating progress in multisensory foundation models, our HEMM and MultiBench benchmarks are widely used for this purpose.

Today, we are particularly interested in foundation models bridging discrete text and high-dimensional continuous temporal data (e.g., medical sensors and time-series) and improving the Pareto-frontier of cross-modal generalization and efficiency with better multimodal interaction-aware experts and task grouping mechanisms (Time-MoE, MINT, MMoE). Beyond prediction, we enhance these foundation models with multimodal reasoning and agentic interaction capabilities. These interactive systems can tackle complex problems using logical, mathematical, and systematic reasoning across diverse data sources and external knowledge, while ensuring their decision-making process remains robust and transparent to human collaborators. Our group is developing new memory mechanisms for long-horizon reasoning agents, creating new environments to train and evaluate multimodal agents, and applying them to real-world problems in healthcare, education, and the workplace.

Key works:

[MEM1: Learning to Synergize Memory and Reasoning for Efficient Long-Horizon Agents, arXiv 2025](https://arxiv.org/abs/2506.15841)

[PuzzleWorld: A Benchmark for Multimodal, Open-Ended Reasoning in Puzzlehunts, arXiv 2025](https://arxiv.org/abs/2506.06211)

[Guiding Mixture-of-Experts with Temporal Multimodal Interactions, arXiv 2025](https://arxiv.org/abs/2509.25678)

[MINT: Multimodal Instruction Tuning with Multimodal Interaction Grouping, arXiv 2025](https://arxiv.org/abs/2506.02308)

[QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training, NeurIPS 2025 oral](https://arxiv.org/abs/2506.00711)

[Interactive Sketchpad: An Interactive Multimodal System for Collaborative, Visual Problem-Solving, CHI 2025 Late Breaking Work](https://arxiv.org/abs/2503.16434)

[Progressive Compositionality in Text-to-Image Generative Models, ICLR 2025 spotlight](https://arxiv.org/abs/2410.16719)

[MMoE: Enhancing Multimodal Models with Mixtures of Multimodal Interaction Experts, EMNLP 2024](https://aclanthology.org/2024.emnlp-main.558/)

[HEMM: Holistic Evaluation of Multimodal Foundation Models, NeurIPS 2024](https://arxiv.org/abs/2407.03418)

[High-Modality Multimodal Transformer: Quantifying Modality & Interaction Heterogeneity for High-Modality Representation Learning, TMLR 2022](https://arxiv.org/abs/2203.01311)

[MultiBench: Multiscale Benchmarks for Multimodal Representation Learning, NeurIPS 2021](https://arxiv.org/abs/2107.07502)

[Multimodal Transformer for Unaligned Multimodal Language Sequences, ACL 2019](https://arxiv.org/abs/1906.00295)
