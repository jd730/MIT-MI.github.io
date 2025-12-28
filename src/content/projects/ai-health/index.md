---
name: "AI for Holistic Health and Wellness"
description: "Developing technologies to assist medical professionals in clinical decision-making, and helping patients track and improve their overall physical, emotional, and social wellbeing."
tags: []
people: [david, jaedong, anku]
image: "./cover.png"
---

AI has enabled remarkable progress in diagnosis across many clinical domains. However, existing benchmarks and models are primarily limited to medical text and imaging, which hinders the development of large-scale multimodal methods that can make holistic assessments of patient health and well-being. Our research advances the ability for AI models to unify diverse clinical data across text, imaging, video, medical and physiological sensing, longitudinal observations, and graphical networks. These technologies can assist medical professionals in accurate and efficient decision-making, while helping patients track and improve their overall physical, emotional, and social wellbeing from rich multimodal indicators.

Among our contributions are [CLIMB](https://arxiv.org/abs/2503.07667) (Clinical Large-scale Integrative Multi-modal Benchmark), one of the most comprehensive collections of clinical data ever compiled for AI research. CLIMB unifies 4.51 million patient samples spanning medical text, imaging (X-rays, CT scans), medical sensing (ECG heart rhythms), brain wave patterns, and molecular structures.

Using CLIMB, we trained [QoQ-Med](https://arxiv.org/abs/2506.00711), the first open generalist clinical foundation model that jointly reasons across medical images, time-series signals, and text reports using a new reasoning objective that better handles modality and task heterogeneity. A promising benefit of these reasoning models is their ability to explain their predictions over multiple steps, highlight salient parts of the medical image and time-series to support their conclusions, and perform differential diagnosis compared to other possible conditions that share similar symptoms.

We are actively collaborating with the clinical researchers at Harvard Medical School and Johns Hopkins University School of Medicine to evaluate and deploy these multimodal clinical foundation models in practice, and developing models that can remain robust across varying patient demographics and regions.

Key works:

[QoQ-Med: Building Multimodal Clinical Foundation Models with Domain-Aware GRPO Training, NeurIPS 2025 oral](https://arxiv.org/abs/2506.00711)

[CLIMB: Data Foundations for Large-Scale Multimodal Clinical Foundation Models, ICML 2025](https://arxiv.org/abs/2503.07667)

[FairGRPO: Towards Fair Reasoning Foundation Models for Clinical Diagnosis, arXiv 2025](https://openreview.net/forum?id=D0SgzgdBjo)

[Can A Society of Generative Agents Simulate Human Behavior and Inform Public Health Policy? A Case Study on Vaccine Hesitancy, COLM 2025](https://arxiv.org/abs/2503.09639)
