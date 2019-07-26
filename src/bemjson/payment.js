const payment = {
  block: 'payment',
  mix: [
  { block: 'form', mods: { border: 'all' }},
  { block: 'grid', elem: 'fraction', mods: {'m-col': '5'}},
  {block: 'section', mods: {'space-v': 'xxl'}},
  ],
  content: [
    {
      block: 'payment',
      elem: 'header',
      mix: [{ block: 'form', elem: 'item', mods: { 'space-v': 'xxl', 'space-h': 'xl', border: 'bottom'} }],
      content: [
        {
          block: 'text',
          mods: { view: 'primary_default', size: 'xxl' },
          mix: [{ block: 'form', elem: 'item', mods: { 'indent-b': 'xxl' } }],
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'xxl_l' }
            }
          ]
        }
      ]
    },
    {
      block: 'payment',
      elem: 'content',
      mix: [
        { block: 'form', elem: 'item', mods: { 'space-v': 'xxl', 'space-h': 'xl', border: 'bottom' } }
      ],
      content: [
        {
      block: 'form',
      elem: 'line',
      mix: [{
        block: 'form',
        elem: 'item',
        mods: {
          'indent-b': 'xxxl',
          'space-v': 'l'
        }
      }],
      content: [{
        block: 'form',
        elem: 'label',
        mix: [{
          block: 'form',
          elem: 'label'
        }],
        content: [{
          block: 'text',
          mods: {
            view: 'primary_default',
            size: 'l'
          },
          content: [{
            block: 'text',
            elem: 'word',
            mods: {
              width: 'l_l'
            },
            mix: [{
              block: 'form',
              elem: 'item',
              mods: {
                'space-v': 'xl'
              }
            }]
          }]
        }, {
          block: 'text',
          mods: {
            view: 'primary_default',
            size: 'l'
          },
          mix: [{
            block: 'form',
            elem: 'item',
            mods: {
              'indent-b': 'xl',
              'space-v': 'xxxxl'
            }
          }],
          content: [{
            block: 'text',
            elem: 'word',
            mods: {
              width: 'l_l'
            }
          }]
        }]
      }]
    }, 
   {
      block: 'form',
      elem: 'control',
      mix: [{
        block: 'form',
        elem: 'item',
        mods: { 'space-v': 'xxs', 'space-h': 'xxl'}
      }],
      content: [{ block: 'form', elem: 'label',
        content: [{
          block: 'form',
          elem: 'item',
          mods: {'indent-b': 'xl'},
          content: [{ block: 'form', elem: 'line',
          mix: [{ block: 'form', mods: { border: 'all'}}],
            content: [{ 
            block: 'text', elem: 'word', 
            mods: {width: 'xl_l'},
            mix: [{ block: 'form', elem: 'item', mods: { 'space-v': 'xl'}}]
          },
              {
                block: 'text',
              elem: 'word',
              mods: {width: 'xl_l'},
              mix: [{
                block: 'form',
                elem: 'item',
                mods: {'space-v': 'xl'}
              }],
            }]
          }],
        }, {
          block: 'form',
          elem: 'item',
          content: [{ block: 'form', elem: 'line', mix: [{ block: 'form', mods: { border: 'all' }}],
            content: [{
              block: 'text',
              elem: 'word',
              mods: {width: 'xl_l'},
            },
            {
                block: 'text',
              elem: 'word',
              mods: {width: 'xl_l'},
              mix: [{
                block: 'form',
                elem: 'item',
                mods: {'space-v': 'xl'}
              }]
            }]
          }]
        }]
      }]
    }]
  },
    {
      block: 'payment',
      elem: 'footer',
      mix: [
        {
          block: 'form',
          elem: 'item',
          mods: {
            'distribute': 'between',
            'border': 'bottom',
            'vertical-align': 'center',
            'space-v': 'l',
            'space-h': 'xl'
          }
        }
      ],
      content: [
        {
          block: 'text',
          mods: { view: 'primary_default', size: 'l' },
          mix: [{ block: 'form', elem: 'item', mods: { 'space-v': 'l', 'indent-b': 'xxl'} }],
          content: [
            {
              block: 'text',
              elem: 'word',
              mods: { width: 'l_l' }
            }
          ]
        },
        {
          block: 'form',
          elem: 'item',
          mods: {'space-h': 'xl-r'},
          content: [
        { 
          block: 'button',
          mods: {'size': 'l'},
          mix: [
          { block: 'theme', mods: {'color': 'project-default-accent'}},
          { block: 'form', elem: 'item', mods: {'indent-b': 'l'}}],
         }
         ]
       }
      ]
    }
  ]
};

export default payment;