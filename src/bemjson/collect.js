const collect = {
  block: "collect",
  mix: [
    { block: "card", mods: { view: "default", border: "all_default" } },
    { block: "theme", mods: { color: "project-inverse-default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "3" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "collect",
      elem: "image",
      content: [
        {
          block: "card",
          elem: "content",
          mix: [{ block: "theme", mods: { color: "project-default-default" } }],
          content: [
            {
              block: "image",
              mix: [
                { block: "collect", elem: "image", mods: { style: "height" } }
              ]
            },
            {
              block: "collect",
              elem: "progress",
              content: [
                {
                  block: "collect",
                  elem: "done",
                  content: [
                    {
                      block: "text",
                      mods: { view: "link", size: "m" },
                      content: [
                        {
                          block: "text",
                          elem: "word",
                          mods: { width: "l_m" }
                        },
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
                    },
                    {
                      block: "text",
                      mods: { view: "primary_default", size: "m" },
                      content: [
                        {
                          block: "text",
                          elem: "word",
                          mods: { width: "m_m" }
                        },
                        {
                          block: "text",
                          elem: "word",
                          mods: { width: "m_s" }
                        }
                      ]
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
      block: "collect",
      elem: "footer",
      mix: [
        {
          block: "card",
          elem: "footer",
          mods: { "space-a": "xxl", "vertical-align": "top" }
        }
      ],
      content: [
        {
          block: "text",
          mods: { view: "primary", size: "l", type: "h1" },
          mix: [{ block: "form", elem: "item", mods: { "space-v": "xxl" } }],
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
          mods: { view: "secondary_brand", size: "s" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "s_s" }
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
          block: "text",
          mods: { view: "secondary_brand", size: "s" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
          content: [
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
          mods: { view: "secondary_brand", size: "s" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
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
          mods: { view: "secondary_brand", size: "s" },
          mix: [{ block: "list", elem: "item", mods: { "indent-b": "s" } }],
          content: [
            {
              block: "text",
              elem: "word",
              mods: { width: "l_l" }
            }
          ]
        }
      ]
    }
  ]
};

export default collect;
