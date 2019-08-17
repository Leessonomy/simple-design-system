const offer = {
  block: "offer",
  mix: [
    { block: "theme", mods: { color: "megafon-brand-default" } },
    { block: "card", mods: { view: "default" } },
    { block: "grid", elem: "fraction", mods: { "m-col": "3" } },
    { block: "section", mods: { "space-v": "xxl" } }
  ],
  content: [
    {
      block: "offer",
      elem: "partner",
      mix: [{ block: "card", elem: "content", mods: { "space-a": "xl" } }],
      content: [
        {
          block: "brand-logo",
          mods: { name: "megafon", size: "m" }
        }
      ]
    },
    {
      block: "offer",
      elem: "footer",
      mix: [{ block: "card", elem: "footer", mods: { "space-a": "xl" } }],
      content: [
        {
          block: "list",
          elem: "item",
          mods: { distribute: "between" },
          content: [
            {
              block: "offer",
              elem: "name",
              mix: [
                { block: "list", elem: "item", mods: { "indent-b": "xs" } }
              ],
              content: [
                {
                  block: "text",
                  mods: { view: "ghost", size: "s" },
                  content: [
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
              block: "offer",
              elem: "sale",
              mix: [
                { block: "list", elem: "item", mods: { "indent-b": "xs" } }
              ],
              content: [
                {
                  block: "text",
                  mods: { view: "primary", size: "xxl" },
                  content: [
                    {
                      block: "text",
                      elem: "word",
                      mods: { width: "m_m" }
                    },
                    {
                      block: "text",
                      elem: "word",
                      mods: { width: "xl_s" }
                    }
                  ]
                }
              ]
            },
            {
              block: "offer",
              elem: "p1",
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
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
              block: "offer",
              elem: "p2",
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
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
              block: "offer",
              elem: "p3",
              content: [
                {
                  block: "text",
                  mods: { view: "secondary", size: "m" },
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
        }
      ]
    }
  ]
};

export default offer;

/* const offer = {
  block: 'offer',
  mix: [{ block: 'theme', mods: { color: 'megafon-brand-default'} }, { block: 'card', mods: { view: 'default' } }],
  content: [
    {
      block: 'offer',
      elem: 'partner',
      mix: [{ block: 'card', elem: 'content', mods: { 'space-a': 'xl' } }],
      content: [
        {
          block: 'brand-logo',
          mods: { name: 'megafon', size: 'm' }
        },
        {
      block: 'layout',
      elem: 'container',
      mods: {'space-v': 'xxxxxl'},
      mix: [{block: 'list', elem: 'item', mods: {'distribute': 'between'}}],
      content: [
      {
        block: 'offer',
        elem: 'name',
      content: [
        {
          block: 'text',
          mods: { view: 'ghost', size: 's' },
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'm_m' }
            }
          ]
        }
        
        ]
      },
      {
      block: 'offer',
      elem: 'sale',
      content: [
        {
          block: 'text',
          mods: { view: 'primary', size: 'xxl'  },
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'm_m' }
            }
          ]
        }
        ]
      },
        {
      block: 'offer',
      elem: 'line',
      content: [{
          block: 'text',
          mods: { view: 'secondary', size: 'm' },
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'l_l' }
            },
            {
              block: 'text',
              elem: 'word',
              mods: { width: 's_s' }
            },
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'm_m' }
            }
            ]
            }]
          },
            {
            block: 'offer',
            elem: 'line',
            content: [{
            block: 'text',
            mods: { view: 'secondary', size: 'm' },
            content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'l_l' }
            },
            {
              block: 'text',
              elem: 'word',
              mods: { width: 's_s' }
            },
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'm_m' }
            },
           ]
           }]
          },
          {
            block: 'offer',
            elem: 'line',
            content: [{
          block: 'text',
          mods: { view: 'secondary', size: 'm' },
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 's_s' }
            },
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'l_l' }
            }
          ]
        }]
        }
       ]
      ]
    },
    {
      block: 'offer',
      elem: 'footer',
      mix: [{ block: 'card', elem: 'footer', mods: { 'space-a': 'xl' } }],
    }
    }
        ] 
    }
  ]
};

export default offer; */
