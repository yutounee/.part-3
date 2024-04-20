export default {
  // 元素控制
  target: document.querySelector('#Cycle'),

  // 指定影像(Number)
  index: 4,

  // 輪播(Object)
  interval: {
    // 自動播放與否(Boolean): true / false
    isAuto: true,
    // 間隔時間(秒)(Number)
    duration: 3,
  },

  /**
   * 轉場類型(String)
   * slide: 滑動
   * fade: 淡化
   */
  mode: 'slide',
  
  // 資料(Array)
  data: [
    {
      title: '羅技 K780 Multi-Device 跨平台藍牙鍵盤',
      href: 'https://24h.pchome.com.tw/prod/DSAR0O-1900BMBC4',
      src: {
        desktop: 'desktop1.png',
        mobile: 'mobile1.jpg',
      },
    },
    {
      title: '羅技 G435 輕量雙模無線藍芽耳機-2入組(黑+白)',
      href: 'https://24h.pchome.com.tw/store/DSAR8P',
      src: {
        desktop: 'desktop2.png',
        mobile: 'mobile2.jpg',
      },
    },
    {
      title: '羅技MX Anywhere 2S恣意優游行動無線滑鼠',
      href: 'https://24h.pchome.com.tw/prod/DSAR0S-1900FUHMC',
      src: {
        desktop: 'desktop3.png',
        mobile: 'mobile3.jpg',
      },
    },
    {
      title: '羅技G G813 機械式短軸電競鍵盤 - 白色-觸感軸(棕軸)',
      href: 'https://24h.pchome.com.tw/store/DSAR1O',
      src: {
        desktop: 'desktop4.png',
        mobile: 'mobile4.jpg',
      },
    },
    {
      title: '羅技 PRO X SUPERLIGHT 無線輕量化電競滑鼠-黑',
      href: 'https://24h.pchome.com.tw/store/DSAR4S',
      src: {
        desktop: 'desktop5.png',
        mobile: 'mobile5.jpg',
      },
    },
  ],
}