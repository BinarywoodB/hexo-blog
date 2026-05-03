'use strict';

// Auto-excerpt: if a post has no <!-- more --> tag, use the first paragraph as excerpt
hexo.extend.filter.register('before_post_render', function (data) {
  if (data.layout === 'post' && data.content && !data.content.includes('<!-- more -->')) {
    const firstParaEnd = data.content.indexOf('\n\n');
    if (firstParaEnd !== -1 && firstParaEnd < 400) {
      data.content = data.content.substring(0, firstParaEnd) + '\n\n<!-- more -->\n\n' + data.content.substring(firstParaEnd + 2);
    } else if (data.content.length > 300) {
      data.content = data.content.substring(0, 300) + '...\n\n<!-- more -->\n\n' + data.content.substring(300);
    }
  }
  return data;
});
