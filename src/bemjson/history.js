const history = {
  block: "history",
  mix: [
    { block: "list", mods: { view: "default", border: "all" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "7" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "history",
      elem: "transaction",
      mix: [
        {
          block: "list",
          elem: "item",
          mods: { border: "bottom", "space-a": "l" }
        }
      ],
      content: [
        {
          block: "history",
          elem: "destination",
          mix: [
            {
              block: "icon-plus",
              mods: {
                "vertical-align": "center"
              }
            }
          ],
          content: [
            {
              block: "history",
              elem: "details",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                },
                {
                  block: "form",
                  elem: "item",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "history",
                  elem: "show",
                  mix: [
                    { block: "e-accordion", elem: "short" },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "time",
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
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m", "indent-b": "s" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "pic",
                      mix: [
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-r": "s" }
                        },
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-l": "l" }
                        },
                        {
                          block: "card",
                          elem: "content",
                          mods: { distribute: "center" }
                        }
                      ],
                      content: [
                        {
                          block: "brand-logo",
                          mods: { name: "yota", size: "m" }
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "label",
                      mix: [
                        { block: "icon-plus", elem: "block" },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "quantity",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_s"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "history",
                  elem: "hide",
                  mix: [
                    {
                      block: "e-accordion",
                      elem: "more",
                      mods: { view: "default" }
                    },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "indent-t": "m", "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "description",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-b": "m" }
                        },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-t": "m", distribute: "between" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            },
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-b": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "history",
                          elem: "actions",
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              mods: {
                                view: "primary_default",
                                size: "l"
                              },
                              content: [
                                {
                                  block: "text",
                                  elem: "word",
                                  mods: { width: "l_l" }
                                }
                              ]
                            },
                            {
                              block: "history",
                              elem: "label",
                              mods: { hidden: "text" },
                              content: [
                                {
                                  block: "text",
                                  mods: { view: "primary_default", size: "l" },
                                  content: [
                                    {
                                      block: "text",
                                      elem: "word",
                                      mods: { width: "s_m" }
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block: "history",
      elem: "transaction",
      mix: [
        {
          block: "list",
          elem: "item",
          mods: { border: "bottom", "space-a": "l" }
        }
      ],
      content: [
        {
          block: "history",
          elem: "destination",
          mix: [
            {
              block: "icon-plus",
              mods: {
                "vertical-align": "center"
              }
            }
          ],
          content: [
            {
              block: "history",
              elem: "details",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                },
                {
                  block: "form",
                  elem: "item",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "history",
                  elem: "show",
                  mix: [
                    { block: "e-accordion", elem: "short" },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "time",
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
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m", "indent-b": "s" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "pic",
                      mix: [
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-r": "s" }
                        },
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-l": "l" }
                        },
                        {
                          block: "card",
                          elem: "content",
                          mods: { distribute: "center" }
                        }
                      ],
                      content: [
                        {
                          block: "brand-logo",
                          mods: { name: "mts", size: "m" }
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "label",
                      mix: [
                        { block: "icon-plus", elem: "block" },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "quantity",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_s"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "history",
                  elem: "hide",
                  mix: [
                    {
                      block: "e-accordion",
                      elem: "more",
                      mods: { view: "default" }
                    },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "indent-t": "m", "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "description",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-b": "m" }
                        },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-t": "m", distribute: "between" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            },
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-b": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "history",
                          elem: "actions",
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              mods: {
                                view: "primary_default",
                                size: "l"
                              },
                              content: [
                                {
                                  block: "text",
                                  elem: "word",
                                  mods: { width: "l_l" }
                                }
                              ]
                            },
                            {
                              block: "history",
                              elem: "label",
                              mods: { hidden: "text" },
                              content: [
                                {
                                  block: "text",
                                  mods: { view: "primary_default", size: "l" },
                                  content: [
                                    {
                                      block: "text",
                                      elem: "word",
                                      mods: { width: "s_m" }
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block: "history",
      elem: "transaction",
      mix: [
        {
          block: "list",
          elem: "item",
          mods: { border: "bottom", "space-a": "l" }
        }
      ],
      content: [
        {
          block: "history",
          elem: "destination",
          mix: [
            {
              block: "icon-plus",
              mods: {
                "vertical-align": "center"
              }
            }
          ],
          content: [
            {
              block: "history",
              elem: "details",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                },
                {
                  block: "form",
                  elem: "item",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "history",
                  elem: "show",
                  mix: [
                    { block: "e-accordion", elem: "short" },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "time",
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
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m", "indent-b": "s" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "pic",
                      mix: [
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-r": "s" }
                        },
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-l": "l" }
                        },
                        {
                          block: "card",
                          elem: "content",
                          mods: { distribute: "center" }
                        }
                      ],
                      content: [
                        {
                          block: "brand-logo",
                          mods: { name: "kcell", size: "m" }
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "label",
                      mix: [
                        { block: "icon-plus", elem: "block" },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "quantity",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_s"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "history",
                  elem: "hide",
                  mix: [
                    {
                      block: "e-accordion",
                      elem: "more",
                      mods: { view: "default" }
                    },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "indent-t": "m", "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "description",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-b": "m" }
                        },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-t": "m", distribute: "between" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            },
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-b": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "history",
                          elem: "actions",
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              mods: {
                                view: "primary_default",
                                size: "l"
                              },
                              content: [
                                {
                                  block: "text",
                                  elem: "word",
                                  mods: { width: "l_l" }
                                }
                              ]
                            },
                            {
                              block: "history",
                              elem: "label",
                              mods: { hidden: "text" },
                              content: [
                                {
                                  block: "text",
                                  mods: { view: "primary_default", size: "l" },
                                  content: [
                                    {
                                      block: "text",
                                      elem: "word",
                                      mods: { width: "s_m" }
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
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block: "history",
      elem: "transaction",
      mix: [
        {
          block: "list",
          elem: "item",
          mods: { border: "bottom", "space-a": "l" }
        }
      ],
      content: [
        {
          block: "history",
          elem: "destination",
          mix: [
            {
              block: "icon-plus",
              mods: {
                "vertical-align": "center"
              }
            }
          ],
          content: [
            {
              block: "history",
              elem: "details",
              mix: [
                {
                  block: "card",
                  elem: "content",
                  mods: { distribute: "center" }
                },
                {
                  block: "form",
                  elem: "item",
                  mods: { "vertical-align": "center" }
                }
              ],
              content: [
                {
                  block: "history",
                  elem: "show",
                  mix: [
                    { block: "e-accordion", elem: "short" },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "time",
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
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m", "indent-b": "s" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "secondary",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "pic",
                      mix: [
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-r": "s" }
                        },
                        {
                          block: "icon-plus",
                          elem: "icon",
                          mods: { "indent-l": "l" }
                        },
                        {
                          block: "card",
                          elem: "content",
                          mods: { distribute: "center" }
                        }
                      ],
                      content: [
                        {
                          block: "brand-logo",
                          mods: { name: "megafon", size: "m" }
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "label",
                      mix: [
                        { block: "icon-plus", elem: "block" },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            }
                          ]
                        }
                      ]
                    },
                    {
                      block: "history",
                      elem: "quantity",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "vertical-align": "center" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_m"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "s_s"
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  block: "history",
                  elem: "hide",
                  mix: [
                    {
                      block: "e-accordion",
                      elem: "more",
                      mods: { view: "default" }
                    },
                    {
                      block: "list",
                      elem: "item",
                      mods: { "indent-t": "m", "vertical-align": "center" }
                    }
                  ],
                  content: [
                    {
                      block: "history",
                      elem: "description",
                      mix: [
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-b": "m" }
                        },
                        {
                          block: "list",
                          elem: "item",
                          mods: { "indent-t": "m", distribute: "between" }
                        }
                      ],
                      content: [
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "text",
                          mods: {
                            view: "primary_default",
                            size: "l"
                          },
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            },
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-b": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "l_l"
                              }
                            },
                            {
                              block: "text",
                              elem: "word",
                              mods: {
                                width: "m_m"
                              }
                            }
                          ]
                        },
                        {
                          block: "history",
                          elem: "actions",
                          mix: [
                            {
                              block: "list",
                              elem: "item",
                              mods: { "indent-t": "m" }
                            }
                          ],
                          content: [
                            {
                              block: "text",
                              mods: {
                                view: "primary_default",
                                size: "l"
                              },
                              content: [
                                {
                                  block: "text",
                                  elem: "word",
                                  mods: { width: "l_l" }
                                }
                              ]
                            },
                            {
                              block: "history",
                              elem: "label",
                              mods: { hidden: "text" },
                              content: [
                                {
                                  block: "text",
                                  mods: { view: "primary_default", size: "l" },
                                  content: [
                                    {
                                      block: "text",
                                      elem: "word",
                                      mods: { width: "s_m" }
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

export default history;
