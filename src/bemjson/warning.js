const warning = {
  block: "warning",
  mix: [
    { block: "informer", mods: { view: "default", border: "all" } },
    { block: "theme", mods: { color: "project-warning-default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "5" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "warning",
      elem: "content",
      mix: [
        {
          block: "informer",
          elem: "content",
          mods: { distribute: "center", "space-a": "xxl" }
        }
      ],
      content: [
        {
          block: "list",
          elem: "item",
          mods: { "vertical-align": "center", "indent-t": "m" },
          mix: [
            {
              block: "card",
              elem: "content",
              mods: { "vertical-align": "center" }
            }
          ],
          content: [
            {
              block: "theme",
              mods: { color: "project-warning-accent" },
              content: [
                {
                  block: "placeholder",
                  mix: [
                    {
                      block: "placeholder",
                      mods: { view: "primary", size: "m" }
                    }
                  ],
                  content: [{ block: "button" }]
                }
              ]
            },
            {
              block: "list",
              elem: "item",
              mods: {
                "vertical-align": "center",
                "space-a": "l",
                "indent-b": "m"
              },
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "list",
                  elem: "item",
                  mix: [
                    {
                      block: "theme",
                      mods: { color: "project-warning-accent" }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      mix: [{ block: "text", mods: { size: "xl" } }],
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
                          mods: { width: "m_m" }
                        },
                        {
                          block: "text",
                          elem: "word",
                          mods: { width: "s_s" }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "list",
                  elem: "item",
                  mix: [
                    {
                      block: "theme",
                      mods: { color: "project-warning-accent" }
                    }
                  ],
                  mods: { "indent-t": "m", "indent-b": "xl" },
                  content: [
                    {
                      block: "text",
                      mix: [{ block: "text", mods: { size: "xl" } }],
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
                    }
                  ]
                }
              ]
            },
            {
              block: "list",
              elem: "item",
              mods: { "indent-t": "m" },
              content: [
                {
                  block: "warning",
                  elem: "button-wrapper",
                  mix: [
                    {
                      block: "informer",
                      elem: "action",
                      mods: { distribute: "center", "space-a": "xxl" }
                    }
                  ],
                  content: [
                    {
                      block: "button",
                      mods: { size: "l" },
                      mix: [
                        {
                          block: "theme",
                          mods: { color: "project-warning-accent" }
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
    }
  ]
};

export default warning;
