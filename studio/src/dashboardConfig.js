export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60bbae9a17675112bbfd64a1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-378jhxid",
                  apiId: "9cfdbe4a-76f3-40c5-a6da-f6d5bd9bbddf",
                },
                {
                  buildHookId: "60bbae9a515884e2a11023b0",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ij35yntb",
                  apiId: "fe1405a5-b29f-4a44-877c-870665d6e8b4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kiril-daskalov/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ij35yntb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
