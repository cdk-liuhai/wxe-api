/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import { expect } from 'chai';
import WxeApi from '../src/wxe-api';

const wxapi = new WxeApi({
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  agentId: process.env.WXE_AGENTID || 28,
});
describe('wxent-api', () => {
  it('sendMessage', async () => {
    const result = await wxapi.sendMessage({
      touser: 'na57',
    }, {
      msgtype: 'text',
      agentid: 28,
      text: {
        content: 'test',
      },
    });
    console.log(result);
  });
  // it('sendText', async () => {
  //   const result = await wxapi.sendText({
  //     touser: 'na57',
  //   }, 28, 'test sendText');
  // });
  // it('send textcard', async () => {
  //   const result = await wxapi.sendTextCard({
  //     touser: 'na57',
  //   }, 28, {
  //     title: 'Title',
  //     description: 'desc',
  //     url: 'http://www.ynu.edu.cn',
  //   });
  //   console.log(result);
  // });
});
