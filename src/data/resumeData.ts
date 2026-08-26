import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Bharat Agrawal",
  title: "Software Engineer & Machine Learning Researcher",
  headline: "Ex-Google SWE Intern | CS @ IIT Mandi & TU Munich | Deep Learning & Systems | 1100+ CP Solved",
  bio: "Computer Science & Engineering student at IIT Mandi and Exchange Scholar at Technical University of Munich (TUM). Ex-Software Engineering Intern at Google (May 18 – Aug 7, 2026). Researching causal reasoning in LLMs, document intelligence, GPU profiling pipelines, and low-latency systems.",
  location: "Mandi, India",
  status: "Ex-Software Engineering Intern @ Google (May 18 – Aug 7, 2026)",
  contact: {
    email: "bharat.agrawal1322@gmail.com",
    phone: "+91 9368914189",
    resumeUrl: "./Bharat_Agrawal_Resume.pdf",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/bharatagrawal1322",
      handle: "bharatagrawal1322",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/bharat-agrawal-iitmandi/",
      handle: "bharat-agrawal",
      icon: "Linkedin"
    },
    {
      platform: "LeetCode",
      url: "https://leetcode.com/u/bharat_agrawal/",
      handle: "bharat_agrawal",
      icon: "Code2"
    },
    {
      platform: "Codeforces",
      url: "https://codeforces.com/profile/bharat_agrawal",
      handle: "bharat_agrawal",
      icon: "Terminal"
    },
    {
      platform: "CodeChef",
      url: "https://www.codechef.com/users/bharat_agrawal",
      handle: "bharat_agrawal",
      icon: "Award"
    }
  ],
  education: [
    {
      institution: "Technical University of Munich (TUM)",
      degree: "Exchange Semester in Informatics",
      location: "Munich, Germany",
      period: "Oct 2025 – Mar 2026",
      score: "9.44 / 10.00",
      scoreType: "GPA",
      conversionScore: "German Grade: 1.7",
      isExchange: true,
      highlights: [
        "Focus Areas: Graph Neural Networks, Advanced C++, Natural Language Processing, Distributed Architecture."
      ]
    },
    {
      institution: "Indian Institute of Technology (IIT), Mandi",
      degree: "B.Tech in Computer Science and Engineering",
      location: "Mandi, India",
      period: "Aug 2023 – Present",
      score: "9.04 / 10.00",
      scoreType: "CGPA",
      isExchange: false,
      highlights: [
        "Relevant Coursework: Data Structures & Algorithms, Database Systems, Machine Learning, Deep Learning, Computer Organization, Operating Systems, Networks."
      ]
    }
  ],
  workExperience: [
    {
      id: "google-swe-intern",
      company: "Google",
      role: "Software Engineering Intern",
      team: "Silicon Product Software",
      location: "Bengaluru, India",
      period: "May 18, 2026 – Aug 7, 2026",
      type: "internship",
      metrics: [
        { label: "GPU Counters Synced", value: "490+ Counters" },
        { label: "Bottleneck Analysis", value: "-40% Time" },
        { label: "OOM Stall Reduction", value: "-60% Stalls" },
        { label: "Execution Environment", value: "Linux & Android" }
      ],
      tags: ["Perfetto", "Vulkan", "ANGLE", "GPU Drivers", "C++", "Linux Kernel", "Android", "Performance Profiling"],
      bullets: [
        "Streamlined performance analysis for Linux and Android by architecting a unified profiling pipeline that synchronizes 490+ GPU hardware counters and CPU traces for GUI visualization, reducing bottleneck identification time by 40%.",
        "Identified several GPU performance bottlenecks by developing custom scripts to merge kernel-space events with a newly implemented user-space API logging mechanism.",
        "Optimized GPU Driver by tweaking heap memory allocation, reducing OOM stall cycles by 60%.",
        "Enhanced the GPU pipeline by replacing synchronous cache flushes with deferred background cache invalidations.",
        "Patched the ANGLE trace test to support headless Vulkan trace replays on Debian-based platforms."
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      iconName: "Code",
      skills: [
        { name: "C / C++", level: "expert" },
        { name: "Python", level: "expert" },
        { name: "Java", level: "proficient" },
        { name: "JavaScript / TypeScript", level: "proficient" },
        { name: "Bash", level: "expert" },
        { name: "SQL", level: "proficient" },
        { name: "HTML / CSS", level: "expert" }
      ]
    },
    {
      category: "Frameworks & Web",
      iconName: "Layers",
      skills: [
        { name: "React.js", level: "expert" },
        { name: "Next.js", level: "proficient" },
        { name: "Node.js", level: "proficient" },
        { name: "FastAPI", level: "expert" },
        { name: "Flask", level: "expert" },
        { name: "Django", level: "proficient" },
        { name: "Streamlit", level: "proficient" },
        { name: "Tailwind CSS", level: "expert" }
      ]
    },
    {
      category: "AI, ML & Research",
      iconName: "BrainCircuit",
      skills: [
        { name: "PyTorch", level: "expert" },
        { name: "TensorFlow", level: "proficient" },
        { name: "LLM Fine-Tuning (Unsloth / LoRA)", level: "expert" },
        { name: "Graph Neural Networks", level: "proficient" },
        { name: "FAISS & Vector Retrieval", level: "expert" },
        { name: "Transformers (HuggingFace)", level: "expert" },
        { name: "Vision Transformers", level: "proficient" },
        { name: "Scikit-Learn, NumPy, Pandas", level: "expert" }
      ]
    },
    {
      category: "Systems, Tools & Low-Level",
      iconName: "Cpu",
      skills: [
        { name: "Perfetto & GPU Profiling", level: "expert" },
        { name: "Vulkan & ANGLE", level: "proficient" },
        { name: "Linux Kernel & Drivers", level: "proficient" },
        { name: "Docker & Containerization", level: "proficient" },
        { name: "Git & GitHub Actions", level: "expert" },
        { name: "AWS", level: "familiar" },
        { name: "Selenium & BeautifulSoup", level: "expert" }
      ]
    }
  ],
  projects: [
    {
      id: "semeval-2026-abductive-reasoning",
      title: "SemEval-2026: Abductive Event Reasoning for LLMs",
      tagline: "Causal evidence extraction pipeline with dual BM25 + FAISS retrieval and 4-bit LoRA fine-tuning on Llama 3.2.",
      category: "research",
      isResearchPaper: true,
      paperUrl: "https://github.com/bharatagrawal1322",
      githubUrl: "https://github.com/bharatagrawal1322",
      tags: ["PyTorch", "Llama 3.2 (3B/8B)", "Unsloth", "4-bit Quantization", "FAISS", "BM25", "NLP", "Causal Reasoning"],
      metrics: [
        { label: "Accuracy", value: "0.80" },
        { label: "Precision", value: "0.90" },
        { label: "F1 Score", value: "0.88" },
        { label: "Train Efficiency", value: "~0.75% Params" }
      ],
      bullets: [
        "Built a robust dual-stage filtering pipeline pairing BM25 lexical search with FAISS dense vector re-ranking to extract high-confidence causal evidence from extensive document collections.",
        "Fine-tuned Llama 3.2 3B and 8B models using parameter-efficient 4-bit quantization with Unsloth, training merely ~0.75% of model parameters.",
        "Attained exceptional performance on Llama 3.2 8B with an accuracy of 0.80, precision of 0.90, and F1 score of 0.88, significantly outstripping zero-shot and few-shot prompting baselines."
      ],
      featured: true
    },
    {
      id: "deep-learning-local-feature-matching",
      title: "Deep Learning Models in Local Feature Matching",
      tagline: "Comprehensive survey, 3D taxonomic classification, and benchmark evaluation spanning GNN and Transformer matchers.",
      category: "research",
      isResearchPaper: true,
      paperUrl: "https://github.com/bharatagrawal1322",
      githubUrl: "https://github.com/bharatagrawal1322",
      tags: ["Computer Vision", "Graph Neural Networks", "Transformers", "MegaDepth", "ScanNet", "Pose Estimation"],
      metrics: [
        { label: "Survey Scope", value: "10+30 Papers" },
        { label: "Taxonomy", value: "3D Classification" },
        { label: "Benchmarks", value: "MegaDepth & ScanNet" },
        { label: "Metrics", value: "Pose Error & AUC" }
      ],
      bullets: [
        "Conducted an in-depth survey of 10 primary papers and 30+ supporting works spanning Graph Neural Network (GNN) sparse matchers and transformer-based dense matching architectures.",
        "Proposed a novel 3-dimensional taxonomy classifying methods by feature modality, architectural strategy, and learning paradigm.",
        "Performed empirical evaluations across two prominent spatial benchmarks (MegaDepth and ScanNet) measuring relative pose error and Area Under the Curve (AUC) metrics."
      ],
      featured: true
    },
    {
      id: "tabularis",
      title: "Tabularis — Table Understanding & Query System",
      tagline: "End-to-end multimodal document AI pipeline converting unstructured tables to structured data with LLM queries.",
      category: "ml",
      award: "2nd Place @ HCLTech Hackathon (48h)",
      tags: ["Python", "Pix2Struct (240M)", "Qwen 3.0 LLM", "Next.js", "Tailwind CSS", "Flask", "Transformers"],
      githubUrl: "https://github.com/bharatagrawal1322",
      metrics: [
        { label: "Table Recognition", value: "95%+ Accuracy" },
        { label: "Docs Processed", value: "1,000+ files" },
        { label: "Query Resolution", value: "90% Resolution" },
        { label: "Hackathon Result", value: "2nd Place" }
      ],
      bullets: [
        "Architected an automated multi-stage document processing pipeline: Preprocessor → Pix2Struct (240M params) → Qwen 3.0 for table extraction from scanned PDFs and images to clean HTML/CSV.",
        "Benchmarked on 1000+ real-world documents, attaining >95% accuracy in cell demarcation, header association, and data alignment.",
        "Integrated Qwen 3.0 with conversational memory to support natural-language inquiries across 50+ diverse query types with 90% resolution rate.",
        "Secured 2nd prize at the competitive HCLTech 48-Hour Hackathon."
      ],
      featured: true
    },
    {
      id: "automatic-modulation-recognition",
      title: "Automatic Modulation Recognition",
      tagline: "Ultra-compact Hybrid CNN + LSTM + GRU deep neural network for RF signal modulation classification.",
      category: "ml",
      guide: "Dr. Robin Khosla",
      affiliation: "SCEE, IIT Mandi",
      tags: ["TensorFlow", "NumPy", "Deep Learning", "Signal Processing", "Flask", "MATLAB", "VHDL"],
      githubUrl: "https://github.com/bharatagrawal1322",
      metrics: [
        { label: "Classification Accuracy", value: "92%" },
        { label: "Parameter Count", value: "106K params" },
        { label: "Inference Latency", value: "50 ms" },
        { label: "Signal Types", value: "11 Modulations" }
      ],
      bullets: [
        "Implemented the VTCNN2 baseline on the Radio ML 2016.10a dataset, achieving 72% accuracy across 8 digital and 3 analog signal types at SNR [0, 18].",
        "Engineered a novel hybrid DNN architecture fusing CNN spatial feature extractors with recurrent LSTM and GRU temporal layers, lifting overall classification accuracy to 92%.",
        "Pruned and downsized the architecture to just 106K parameters, reducing inference latency by 40% with a responsive 50ms execution window."
      ],
      featured: true
    },
    {
      id: "biometric-seal",
      title: "BiometricSEAL — Embedding Biometrics in Images",
      tagline: "Diffusion and U-Net-based imperceptible biometric watermarking trained on 60k+ SA-1B dataset images.",
      category: "ml",
      tags: ["PyTorch", "Vision Transformer", "Diffusion Models", "U-Net", "Meta VideoSEAL", "CUDA"],
      githubUrl: "https://github.com/bharatagrawal1322",
      metrics: [
        { label: "Bit Accuracy", value: "97% (64-bit)" },
        { label: "SSIM Quality", value: ">0.97" },
        { label: "Cosine Similarity", value: "0.85 – 0.91" },
        { label: "Training Scale", value: "60k+ SA-1B" }
      ],
      bullets: [
        "Enhanced Meta's VideoSEAL architecture to embed high-entropy float watermarks instead of standard binary markers into visual media.",
        "Trained on 60,000+ images from Meta's Segment Anything (SA-1B) dataset on high-end NVIDIA RTX A5000 GPUs using freeze-unfreeze scheduling.",
        "Achieved high fidelity with SSIM > 0.97 and Cosine Similarities between 0.85 – 0.91 while preserving visual perception.",
        "Formulated a diffusion-assisted variant achieving 97% bit extraction accuracy for 64-bit embedded payloads under distortion."
      ],
      featured: false
    },
    {
      id: "simutradex",
      title: "SimuTradex — Low-Latency Paper Trading Engine",
      tagline: "Realistic simulated trading platform with real-time NSE market feeds, portfolio management, and sub-150ms execution.",
      category: "fullstack",
      award: "1st Place @ KrackHack'24 (100+ teams)",
      tags: ["Flask", "Python", "JavaScript", "Jinja2", "BeautifulSoup", "Google Finance API", "Tailwind CSS"],
      githubUrl: "https://github.com/bharatagrawal1322",
      metrics: [
        { label: "NSE Stocks", value: "140+ Tickers" },
        { label: "Execution Speed", value: "<150 ms" },
        { label: "Hackathon Result", value: "1st Place" },
        { label: "Competitors", value: "100+ Freshmen" }
      ],
      bullets: [
        "Designed a full-featured paper trading simulation platform supporting 140+ National Stock Exchange (NSE) equities with live P&L tracking.",
        "Built responsive scraper pipelines with BeautifulSoup and Google Finance feeds to update quotes with <150ms latency.",
        "Awarded 1st place among 100+ participating freshmen teams in the intra-college GDG KrackHack competition."
      ],
      featured: false
    },
    {
      id: "data-harvesting-pipeline",
      title: "Data Harvesting & Structuring Pipeline",
      tagline: "Scalable autonomous web crawler and dual-stage OCR engine with cryptographic deduplication.",
      category: "data-systems",
      tags: ["Python", "Tesseract OCR", "BeautifulSoup", "PyPDF2", "pdf2image", "SHA-256", "Requests"],
      githubUrl: "https://github.com/bharatagrawal1322",
      metrics: [
        { label: "Format Support", value: "PDF, EPUB, HTML" },
        { label: "Deduplication", value: "SHA-256 Checksum" },
        { label: "Extraction Stages", value: "Dual OCR Engine" }
      ],
      bullets: [
        "Engineered an autonomous, fault-tolerant web crawler to systematically gather thousands of technical documents across heterogeneous web endpoints.",
        "Constructed a dual-stage text extraction engine pairing PyPDF2 (native text extraction) with Tesseract OCR (rasterized scans) for comprehensive recovery.",
        "Integrated a SHA-256 cryptographic checksum cache to prevent duplicate processing of identical files, cutting pipeline compute by over 60%."
      ],
      featured: false
    }
  ],
  achievements: [
    {
      id: "krackhack",
      title: "1st Place — KrackHack'24",
      subtitle: "Organized by Google Developer Groups (GDG) IIT Mandi among 100+ freshmen participants.",
      badge: "Winner",
      type: "hackathon"
    },
    {
      id: "csaw-ctf",
      title: "Ranked 10th Nationwide — CSAW CTF 2025",
      subtitle: "Top 10 finish across India competing in reverse engineering, binary exploitation, and crypto challenges.",
      badge: "Top 10 India",
      type: "ctf"
    },
    {
      id: "scythe-ctf",
      title: "4th Rank — Scythe CTF & 6th Rank — Chronos CTF",
      subtitle: "High-ranking finishes in competitive cybersecurity & offensive security capture-the-flag competitions.",
      badge: "4th & 6th Rank",
      type: "ctf"
    },
    {
      id: "amazon-ml",
      title: "Qualified — Amazon ML Challenge 2025",
      subtitle: "Successfully qualified through competitive machine learning screening rounds.",
      badge: "Qualified",
      type: "ml"
    },
    {
      id: "cp-solved",
      title: "1,100+ Coding Problems Solved",
      subtitle: "Consistent problem solver across Codeforces, LeetCode, and GeeksforGeeks with strong algorithmic grounding.",
      badge: "1100+ Solved",
      type: "cp"
    }
  ],
  leadership: [
    {
      role: "Mentor & Core Member",
      organization: "Kamand Prompt — Programming Club of IIT Mandi",
      description: "Mentoring junior students in algorithmic problem solving, hosting competitive programming rounds, and organizing technical workshops.",
      period: "2023 – Present"
    },
    {
      role: "Mentor & Core Member",
      organization: "ACM Student Chapter — IIT Mandi",
      description: "Spearheading tech seminars, hackathons, and collaborative open-source sessions within the student community.",
      period: "2023 – Present"
    }
  ],
  cpStats: {
    totalProblems: 1100,
    platforms: [
      {
        name: "LeetCode",
        handle: "bharat_agrawal",
        url: "https://leetcode.com/u/bharat_agrawal/",
        highlight: "Advanced Data Structures & Algorithms"
      },
      {
        name: "Codeforces",
        handle: "bharat_agrawal",
        url: "https://codeforces.com/profile/bharat_agrawal",
        highlight: "Competitive Division Rounds"
      },
      {
        name: "CodeChef",
        handle: "bharat_agrawal",
        url: "https://www.codechef.com/users/bharat_agrawal",
        highlight: "Star Contests & Solves"
      },
      {
        name: "CSAW CTF & Security",
        handle: "Rank 10 India",
        url: "https://github.com/bharatagrawal1322",
        highlight: "Binary Exploitation & Reversing"
      }
    ]
  }
};
