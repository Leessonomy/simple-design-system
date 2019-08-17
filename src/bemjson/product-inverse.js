const productInverse = {
  block: "product",
  mix: [
    { block: "card", mods: { view: "default", border: "all" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "3" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "product",
      elem: "content",
      mix: [
        { block: "card", elem: "content", mods: { "space-a": "xxl" } },
        { block: "theme", mods: { color: "project-inverse-default" } }
      ],
      content: [
        {
          block: "theme",
          mods: { color: "project-inverse-accent" },
          content: [
            {
              block: "image",
              mods: { product: "inverse" }
            }
          ]
        },

        {
          block: "card",
          elem: "content",
          mods: { distribute: "center" },
          mix: [
            { block: "list", elem: "item", mods: { distribute: "between" } },
            { block: "section", mods: { "space-v": "xxxxl" } }
          ],
          content: [
            {
              block: "list",
              elem: "item",
              mods: { "indent-t": "m", "indent-b": "s" },
              content: [
                {
                  block: "text",
                  mix: [
                    { block: "text", mods: { view: "primary", size: "l" } }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mods: { width: "m_l" }
                    }
                  ]
                }
              ]
            },
            {
              block: "list",
              elem: "item",
              content: [
                {
                  block: "text",
                  mix: [
                    { block: "text", mods: { view: "primary", size: "m" } }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mods: { width: "m_m" }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    {
      block: "product",
      elem: "footer",
      mix: [{ block: "card", elem: "footer", mods: { "space-a": "m_m" } }]
    }
  ]
};

export default productInverse;
