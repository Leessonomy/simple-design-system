const eventBlock = {
  block: "event-block",
  mix: [
    { block: "grid", elem: "fraction", mods: { "m-col": "10" } },
    { block: "grid", mods: { "col-gap": "full" } },
    { block: "grid", mods: { "m-columns": "10" } }
  ],
  content: [
    {
      block: "event",
      mix: [
        {
          block: "theme",
          mods: { view: "default", color: "project-inverse-default" }
        },
        { block: "grid", elem: "fraction", mods: { "m-col": "5" } }
      ],
      content: [
        {
          block: "event",
          elem: "content",
          mix: [
            {
              block: "card",
              elem: "content",
              mods: {
                "vertical-align": "center",
                distribute: "center",
                "space-a": "xxl"
              }
            }
          ],
          content: [
            {
              block: "event",
              elem: "logo",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                }
              ],
              content: [
                {
                  block: "avatar",
                  mods: { color: "default" },
                  mix: [{ block: "avatar", mods: { size: "m" } }]
                },
                {
                  block: "brand-logo",
                  mix: [
                    { block: "brand-logo", mods: { name: "mts", size: "m" } }
                  ]
                }
              ]
            },
            {
              block: "event",
              elem: "title",
              mix: [{ block: "list", elem: "item", mods: { "indent-t": "m" } }],
              content: [
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xxl",
                        align: "center",
                        type: "h1"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      element: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },

                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block: "event",
              elem: "description",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xl",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: { view: "primary", size: "xl", align: "center" }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xl",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "link",
                        size: "l",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: "event",
          elem: "footer",
          mix: [
            {
              block: "card",
              elem: "footer",
              mods: {
                "vertical-align": "center",
                distribute: "center",
                "space-a": "xxl"
              }
            }
          ]
        }
      ]
    },
    {
      block: "event",
      mix: [
        {
          block: "theme",
          mods: { view: "default", color: "project-inverse-default" }
        },
        { block: "grid", elem: "fraction", mods: { "m-col": "5" } }
      ],
      content: [
        {
          block: "event",
          elem: "content",
          mix: [
            {
              block: "card",
              elem: "content",
              mods: {
                "vertical-align": "center",
                distribute: "center",
                "space-a": "xxl"
              }
            }
          ],
          content: [
            {
              block: "event",
              elem: "logo",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                }
              ],
              content: [
                {
                  block: "avatar",
                  mods: { color: "default" },
                  mix: [{ block: "avatar", mods: { size: "m" } }]
                },
                {
                  block: "brand-logo",
                  mix: [
                    { block: "brand-logo", mods: { name: "yota", size: "m" } }
                  ]
                }
              ]
            },
            {
              block: "event",
              elem: "title",
              mix: [{ block: "list", elem: "item", mods: { "indent-t": "m" } }],
              content: [
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xxl",
                        align: "center",
                        type: "h1"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      element: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },

                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block: "event",
              elem: "description",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xl",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: { view: "primary", size: "xl", align: "center" }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "primary",
                        size: "xl",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "l_l" } }
                      ]
                    }
                  ]
                },
                {
                  block: "text",
                  mix: [
                    {
                      block: "text",
                      mods: {
                        view: "link",
                        size: "l",
                        align: "center",
                        type: "p"
                      }
                    }
                  ],
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    },
                    {
                      block: "text",
                      elem: "word",
                      mix: [
                        { block: "text", elem: "word", mods: { width: "s_s" } }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          block: "event",
          elem: "footer",
          mix: [
            {
              block: "card",
              elem: "footer",
              mods: {
                "vertical-align": "center",
                distribute: "center",
                "space-a": "xxl"
              }
            }
          ]
        }
      ]
    }
  ]
};

export default eventBlock;
