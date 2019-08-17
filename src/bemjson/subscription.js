const subscription = {
  block: "subscription",
  mix: [
    { block: "card", mods: { view: "default" } },
    { block: "theme", mods: { color: "project-brand-default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "4" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "subscribtion",
      elem: "info",
      mix: [
        { block: "card", elem: "content", mods: { "space-a": "xl" } },
        { block: "list", elem: "item", mods: { distribute: "between" } }
      ],
      content: [
        {
          block: "text",
          mods: { view: "primary", size: "xxl", type: "h1" },
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "l_m" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "m_l" }
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "l", type: "p" },
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "l_l" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "m_m" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "l", type: "p" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "l_l" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "l", type: "p" },
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "m_m" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "l" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "l_l" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "l", type: "p" },
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "m_m" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
            }
          ]
        },
        {
          block: "subscribtion",
          elem: "control",
          mix: [
            {
              block: "list",
              elem: "item",
              mods: { "space-b": "s", "indent-t": "m" }
            },
            { block: "form", mods: { border: "all_brand" } }
          ],
          content: [
            {
              block: "input",
              mods: { size: "s" }
            }
          ]
        }
      ]
    },
    {
      block: "subscribtion",
      elem: "footer",
      mix: [{ block: "card", elem: "footer", mods: { "space-a": "xl" } }],
      content: [
        {
          block: "button",
          mods: { size: "l", width: "full" },
          mix: [{ block: "theme", mods: { color: "project-brand-accent" } }]
        }
      ]
    }
  ]
};

export default subscription;
