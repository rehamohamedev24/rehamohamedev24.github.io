window.PORTFOLIO = {
  name: "Reham Mohammed Ahmed",
  role: "Android Developer",
  location: "Egypt",
  phone: "+201157449413",
  email: "rehamohamedev24@gmail.com",
  github: "https://github.com/rehamohamedev24",
  linkedin: "https://www.linkedin.com/in/reham-mohammed24", 
  resume: "assets/resume.pdf",

  summary:
    "Android Developer and Computer Science graduate with hands-on experience building 5+ Android applications using Kotlin. Skilled in Jetpack Compose, Android Jetpack components, MVVM, and modular Clean Architecture with a strong focus on performance, scalability, and user experience.",

  highlights: [
    "Kotlin",
    "MVVM",
    "Clean Architecture",
    "Jetpack Compose",
    "Retrofit",
    "Room",
    "Hilt",
    "Firebase",
  ],

  skills: [
    { name: "Kotlin", level: 95 },
    { name: "Java", level: 90 },
    { name: "Android SDK", level: 95 },
    { name: "Jetpack Compose", level: 88 },
    { name: "Android Jetpack (ViewModel, LiveData, Navigation)", level: 90 },
    { name: "MVVM Architecture", level: 92 },
    { name: "Clean Architecture (Multi-Module)", level: 90 },
    { name: "Hilt (Dependency Injection)", level: 88 },
    { name: "Coroutines & Flow", level: 90 },
    { name: "Retrofit (REST APIs)", level: 92 },
    { name: "Room / DataStore / SharedPreferences", level: 88 },
    { name: "Firebase + GitHub Actions (CI/CD)", level: 82 },
  ],

  projects: [
    {
      title: "E-Commerce App",
      image: "assets/projects/ecommerce.png",
      description:
        "Full-featured Android e-commerce app: browse/search products, product details, favorites, cart, and checkout flow. Built end-to-end using Multi-Module Clean Architecture (app/domain/data) and MVVM with offline caching for reliability.",
      tech: ["Kotlin", "MVVM", "Clean Architecture", "Room", "Retrofit", "Hilt"],
      github: "https://github.com/rehamohamedev24/E-Commerce",
      live: "",
    },
    {
      title: "FlashFeed News App",
      image: "assets/projects/flashfeed.jpg",
      description:
        "Android news app to browse/search real-time articles across categories. Multi-Module Clean Architecture + MVVM + Hilt, with improved performance via optimized state management and network calls.",
      tech: ["Kotlin", "MVVM", "Hilt", "Retrofit", "Coroutines"],
      github: "https://github.com/rehamohamedev24",
      live: "",
    },
    {
      title: "Meals App",
      image: "assets/projects/meals.jpg",
      description:
        "Food browsing app displaying hundreds of meals fetched from public API. Built with modular architecture and Android architecture components to improve build times and enable smooth teamwork.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit"],
      github: "https://github.com/rehamohamedev24",
      live: "",
    },
  ],

  experience: [
    {
      title: "Android Mobile App Developer",
      company: "DEPI, MCIT",
      period: "Dec 2025 – Present",
      location: "Egypt",
      description:
        "Intensive training in Java, Kotlin, OOP, and professional soft skills with strong assessment performance.",
      achievements: [
        "Completed 100+ hours of training",
        "Achieved 99% average score across certification exams",
      ],
    },
    {
      title: "Android Developer",
      company: "Route IT Training Center",
      period: "Oct 2024 – Apr 2025",
      location: "Maadi, Egypt",
      description:
        "Developed 5+ real-world Android applications using Kotlin, MVVM, and Clean Architecture principles.",
      achievements: [
        "Implemented Git branching strategy improving feature integration by ~15%",
      ],
    },
    {
      title: "Android Developer Scholarship",
      company: "Orange Digital Center Egypt",
      period: "Sep – Oct 2024",
      location: "Nasr City, Egypt",
      description:
        "Built a multi-module Meals app using Jetpack Compose, MVVM, Clean Architecture, Retrofit, Coroutines/Flow, and Hilt.",
      achievements: [
        "Reduced DI boilerplate by ~40% using Hilt",
        "Improved maintainability and scalability for future features",
      ],
    },
  ],

  education: {
    degree: "Bachelor’s Degree in Computer Science",
    school: "Faculty of Computers and AI, Beni-Suef University",
    date: "July 2024",
    gpa: "3.53 / 4.0 (A)",
  },
};
