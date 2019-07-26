const header = {
  block: 'header',
  mix: [
  {block: 'theme', mods: {'gap': 'small_xxxl'}},
  {block: 'grid', elem: 'fraction', mods: {'m-col': '8'}},
  {block: 'section', mods: {'space-v': 'xxl'}},
  { block: 'layout', elem: 'container', mods: {'space-v': 'xxxxxl'}},
  ],
  content: [
  {
    block: 'header',
    elem: 'logo',
  },
    {
      block: 'onoffswitch',
      content: [
        {
          block: 'onoffswitch__button'
        }
      ]
    }
  ]
}

export default header;