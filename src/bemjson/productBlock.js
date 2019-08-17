const productBlock = {
  block: "theme",
  mods: { color: "project-default-main" },
  mix: [
    { block: "product", elem: "wrapper", mods: { position: "default" } },
    { block: "list", elem: "item", mods: { "vertical-align": "center" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "12" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "text",
      mods: { type: "h2", view: "primary", size: "xxl" },
      content: [
        {
          block: "text",
          elem: "word",
          mods: { width: "l_l" }
        },
        {
          block: "text",
          elem: "word",
          mods: { width: "m_s" }
        },
        {
          block: "text",
          elem: "word",
          mods: { width: "m_s" }
        },
        {
          block: "text",
          elem: "word",
          mods: { width: "l_m" }
        },
        {
          block: "text",
          elem: "word",
          mods: { width: "s_s" }
        }
      ]
    },
    {
      block: "product",
      mods: { color: "wrapper" },
      mix: [
        { block: "grid", elem: "fraction", mods: { "m-col": "12" } },
        { block: "grid", mods: { "col-gap": "half" } },
        { block: "grid", mods: { "m-columns": "12" } }
      ],
      content: [
        {
          block: "product",
          mix: [
            { block: "card", mods: { view: "default", border: "all_brand" } },
            { block: "grid", elem: "fraction", mods: { "m-col": "3" } }
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
                    {
                      block: "list",
                      elem: "item",
                      mods: { distribute: "between" }
                    },
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "l" }
                            }
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "m" }
                            }
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
              mix: [
                { block: "card", elem: "footer", mods: { "space-a": "m_m" } }
              ]
            }
          ]
        },
        {
          block: "product",
          mix: [
            { block: "card", mods: { view: "default", border: "all_brand" } },
            { block: "grid", elem: "fraction", mods: { "m-col": "3" } }
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
                    {
                      block: "list",
                      elem: "item",
                      mods: { distribute: "between" }
                    },
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "l" }
                            }
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "m" }
                            }
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
              mix: [
                { block: "card", elem: "footer", mods: { "space-a": "m_m" } }
              ]
            }
          ]
        },
        {
          block: "product",
          mix: [
            { block: "card", mods: { view: "default", border: "all_brand" } },
            { block: "grid", elem: "fraction", mods: { "m-col": "3" } }
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
                    {
                      block: "list",
                      elem: "item",
                      mods: { distribute: "between" }
                    },
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "l" }
                            }
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "m" }
                            }
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
              mix: [
                { block: "card", elem: "footer", mods: { "space-a": "m_m" } }
              ]
            }
          ]
        },

        {
          block: "product",
          mix: [
            { block: "card", mods: { view: "default", border: "all_brand" } },
            { block: "grid", elem: "fraction", mods: { "m-col": "3" } }
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
                    {
                      block: "list",
                      elem: "item",
                      mods: { distribute: "between" }
                    },
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "l" }
                            }
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
                            {
                              block: "text",
                              mods: { view: "primary", size: "m" }
                            }
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
              mix: [
                { block: "card", elem: "footer", mods: { "space-a": "m_m" } }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default productBlock;
