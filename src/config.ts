export const SITE = {
  website: "https://hanalia.github.io/aimakersclub/",
  base : "/aimakersclub",
  author: "David Jeong",
  profile: "https://hanalia.github.io/aimakersclub/",
  desc: "A blog curating various AI contents and insights in the rapidly evolving field of artificial intelligence.",
  title: "AI Insights",
  ogImage: "ai-insights-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "수정 요청하기", 
    url: "https://github.com/hanalia/aimakersclub/edit/main/",
  },
  dynamicOgImage: true,
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
