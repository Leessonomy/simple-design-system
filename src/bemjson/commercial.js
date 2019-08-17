const commercial = {
  block: "commercial",
  mix: [
    { block: "card", mods: { view: "default" } },
    { block: "theme", mods: { color: "project-brand-default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "3" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "commercial",
      elem: "pic",
      mix: [{ block: "card", elem: "content", mods: { "space-a": "xxl" } }],
      content: [
        {
          block: "card",
          mods: { border: "all_brand" },
          content: [
            {
              block: "image",
              mix: [
                {
                  block: "commercial",
                  elem: "image",
                  mods: { style: "height" }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block: "commercial",
      elem: "info",
      mix: [
        { block: "card", elem: "footer", mods: { "space-a": "xl" } },
        { block: "section", mods: { "space-v": "xxl" } }
      ],
      content: [
        {
          block: "text",
          mix: [
            { block: "text", mods: { view: "primary", size: "s" } },
            { block: "list", elem: "item", mods: { "indent-b": "s" } },
            { block: "section", mods: { "space-v": "xxxxl" } }
          ],
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
              mods: { width: "l_l" }
            }
          ]
        },
        {
          block: "text",
          mix: [
            { block: "text", mods: { view: "primary", size: "s" } },
            { block: "list", elem: "item", mods: { "indent-b": "s" } }
          ],
          content: [
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
              mods: { width: "m_m" }
            },
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
          block: "commercial",
          elem: "navigation",
          mix: [
            { block: "card", elem: "content", mods: { distribute: "center" } }
          ],
          content: [
            {
              block: "commercial",
              elem: "page-button"
            },
            {
              block: "commercial",
              elem: "page-button"
            },
            {
              block: "commercial",
              elem: "page-button"
            }
          ]
        }
      ]
    }
  ]
};

export default commercial;
