const footer = {
  block: 'footer',
  mix: [
  {block: 'theme', mods: {'gap': 'small_xxxl'}},
  {block: 'form', elem: 'item', mods:{'space-v': 'xxxl'}},
  {block: 'grid', elem: 'fraction', mods: {'m-col': '8'}},
  {block: 'form', elem: 'item', mods: {'distribute': 'between'}},
  ],
  content: [
    {
      block: 'text',
      mix: [{ block: 'text', mods: { view: 'primary_default', size: 'l' } }],
      content: [
        {
          block: 'text',
          elem: 'word',
          mix: [{ block: 'text', elem: 'word', mods: { width: 'l_l' } }]
        },
        {
          block: 'text',
          elem: 'word',
          mix: [{ block: 'text', elem: 'word', mods: { width: 's_s' } }]
        }
      ]
    },
    {
      block: 'text',
      mix: [{ block: 'text', mods: { view: 'primary_default', size: 'l' } }],
      content: [
        {
          block: 'text',
          elem: 'word',
          mix: [{block: 'text', elem: 'word', mods: { width: 'm_s' }}],
        },
        {
          block: 'text',
          elem: 'word',
          mix: [{block: 'text', elem: 'word', mods: { width: 'm_l' }}],
        },
      ]
    }
  ]
};

export default footer;