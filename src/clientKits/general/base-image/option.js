export default {
  title: '图片',
  domId: '',
  domName: '',
  style: [
    {
      type: 'color-picker',
      label: '背景颜色',
      attr: 'background-color',
      val: '',
      isNecessary: false,
    },
    {
      type: 'upload',
      label: '上传图片',
      attr: 'src',
      val: '',
      /* limit: {
          w: 750,
          h: 200,
          s: 500
        },*/
      isNecessary: true,
    },
    {
      type: 'input-number',
      label: '上边距',
      attr: 'padding-top',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true,
    },
    {
      type: 'input-number',
      label: '右边距',
      attr: 'padding-right',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true,
    },
    {
      type: 'input-number',
      label: '下边距',
      attr: 'padding-bottom',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true,
    },
    {
      type: 'input-number',
      label: '左边距',
      attr: 'padding-left',
      val: 0,
      unit: 'px',
      min: 0,
      max: 50,
      step: 1,
      isNecessary: true,
    },
  ],
  action: {
    type: 'image-click',
    title: '点击区域配置',
  },
  settings: {
    clicks: [
      {
        index: 0,
        x: 0,
        y: 0,
        w: 225,
        h: 64,
        click: null,
      },
    ],
  },
}
