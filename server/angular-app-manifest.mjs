
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Saranya-Preethi-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Saranya-Preethi-portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 971, hash: 'dc77eb05a5690cf10f33285bc49e344784196b07c2ff24ad0515f2c263b42a53', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: 'c96c17c8aa5fab474234f0906ae1ad2d8b30de4b5f57c7748fa8673050e47e43', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 26457, hash: 'fc228d4b888c432cbd5b458cba39f54a4ea09a6d5071610327474988142b4f85', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MKM5WNBC.css': {size: 352, hash: 'Vxiati/CDTQ', text: () => import('./assets-chunks/styles-MKM5WNBC_css.mjs').then(m => m.default)}
  },
};
