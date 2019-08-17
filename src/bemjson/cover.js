const cover = {
  block: "cover",
  mix: [
    { block: "card", mods: { view: "default", border: "all_brand" } },
    { block: "theme", mods: { color: "project-brand-default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "3" } },
    { block: "section", mods: { "space-v": "xxxxl" } }
  ],
  content: [
    {
      block: "card",
      elem: "info",
      mix: [{ block: "card", elem: "content", mods: { "space-a": "xxl" } }],
      content: [
        {
          block: "cover",
          elem: "preview",
          mix: [{ block: "theme", mods: { color: "project-brand" } }],
          content: [
            {
              block: "card",
              mods: { border: "all_brand" },
              content: [
                {
                  block: "image",
                  mix: [
                    { block: "cover", elem: "image", mods: { style: "height" } }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "xxl", type: "p" },
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
            }
          ]
        },
        {
          block: "text",
          mods: { view: "primary", size: "xxl", type: "p" },
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "m_m" }
            },
            {
              block: "text",
              elem: "word",
              mods: { width: "m_m" }
            }
          ]
        }
      ]
    },
    {
      block: "card",
      elem: "footer",
      content: [
        {
          block: "form",
          elem: "item",
          mods: { "space-h": "xxl" },
          content: [
            {
              block: "button",
              mods: { size: "l" },
              mix: [
                { block: "theme", mods: { color: "project-default-default" } }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default cover;
