const articles = {
  block: "articles",
  mix: [
    { block: "list", mods: { view: "default" } },
    { block: "section", mods: { "space-v": "xxl" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "4" } }
  ],
  content: [
    {
      block: "articles",
      elem: "article",
      mix: [{ block: "list", elem: "item", mods: { "indent-b": "xl" } }],
      content: [
        {
          block: "articles",
          elem: "unit",
          mix: [{ block: "icon-plus", mods: { "vertical-align": "center" } }],
          content: [
            {
              block: "articles",
              elem: "pic",
              mix: [
                { block: "theme", mods: { color: "project-inverse-default" } },
                { block: "icon-plus", mods: { "vertical-align": "center" } },
                { block: "icon-plus", elem: "icon", mods: { "indent-r": "m" } }
              ],
              content: [
                {
                  block: "image",
                  mix: [
                    {
                      block: "articles",
                      elem: "image",
                      mods: { "style-height": "width" }
                    }
                  ]
                }
              ]
            },
            {
              block: "articles",
              elem: "content",
              mix: [{ block: "icon-plus", elem: "block" }],
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
                  mix: [
                    { block: "list", elem: "item", mods: { "indent-b": "m" } }
                  ],
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
                      mods: { width: "m_m" }
                    }
                  ]
                },
                {
                  block: "articles",
                  elem: "title",
                  content: [
                    {
                      block: "text",
                      mods: { view: "primary_default", size: "l" },
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-b": "xl" }
                        }
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
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mods: { view: "link", size: "m" },
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
      block: "articles",
      elem: "article",
      mix: [{ block: "list", elem: "item", mods: { "indent-b": "xl" } }],
      content: [
        {
          block: "articles",
          elem: "unit",
          mix: [{ block: "icon-plus", mods: { "vertical-align": "center" } }],
          content: [
            {
              block: "articles",
              elem: "pic",
              mix: [
                { block: "theme", mods: { color: "project-inverse-default" } },
                { block: "icon-plus", mods: { "vertical-align": "center" } },
                { block: "icon-plus", elem: "icon", mods: { "indent-r": "m" } }
              ],
              content: [
                {
                  block: "image",
                  mix: [
                    {
                      block: "articles",
                      elem: "image",
                      mods: { "style-height": "width" }
                    }
                  ]
                }
              ]
            },
            {
              block: "articles",
              elem: "content",
              mix: [{ block: "icon-plus", elem: "block" }],
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
                  mix: [
                    { block: "list", elem: "item", mods: { "indent-b": "xl" } }
                  ],
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
                      mods: { width: "m_m" }
                    }
                  ]
                },
                {
                  block: "articles",
                  elem: "title",
                  mix: [
                    { block: "list", elem: "item", mods: { "indent-b": "xl" } }
                  ],
                  content: [
                    {
                      block: "text",
                      mods: { view: "primary_default", size: "l" },
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
                    }
                  ]
                },
                {
                  block: "text",
                  mods: { view: "link", size: "m" },
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
      block: "articles",
      elem: "article",
      mix: [{ block: "list", elem: "item", mods: { "indent-b": "xl" } }],
      content: [
        {
          block: "articles",
          elem: "unit",
          mix: [{ block: "icon-plus", mods: { "vertical-align": "center" } }],
          content: [
            {
              block: "articles",
              elem: "pic",
              mix: [
                { block: "theme", mods: { color: "project-inverse-default" } },
                { block: "icon-plus", mods: { "vertical-align": "center" } },
                { block: "icon-plus", elem: "icon", mods: { "indent-r": "m" } }
              ],
              content: [
                {
                  block: "image",
                  mix: [
                    {
                      block: "articles",
                      elem: "image",
                      mods: { "style-height": "width" }
                    }
                  ]
                }
              ]
            },
            {
              block: "articles",
              elem: "content",
              mix: [{ block: "icon-plus", elem: "block" }],
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
                  mix: [
                    { block: "list", elem: "item", mods: { "indent-b": "m" } }
                  ],
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
                      mods: { width: "m_m" }
                    }
                  ]
                },
                {
                  block: "articles",
                  elem: "title",
                  mix: [
                    { block: "list", elem: "item", mods: { "indent-b": "xl" } }
                  ],
                  content: [
                    {
                      block: "text",
                      mods: { view: "primary_default", size: "l" },
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
                    }
                  ]
                },
                {
                  block: "text",
                  mods: { view: "link", size: "m" },
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

export default articles;
