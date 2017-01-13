# wxe-api
微信企业号API

## 示例

```js
import WxeApi from 'wxe-api';

const wxeapi = new WxeApi({
  corpId: process.env.WXE_CORPID,
  secret: process.env.WXE_SECRET,
  agentId: process.env.WXE_AGENTID || 28,
});

const na57 = await wxeapi.getUser('na57');
```

## API

### constructor(options)

### getAuthorizeURL(redirectUri, state)

### getToken()

### getUserIdByCode(code)

### getUser(userid)

### getJsApiTicket()

### getJsConfig({ debug, jsApiList, url })

### getGroupConfig(url)

### getContactTicket()

### sendMessage(to, message)

### sendText(to, agentid, content)

### sendNews(to, agentid, articles)

### sendTextCard(to, agentid, textcard)

### async getTagList()
获取标签列表

- 返回值
  ```js
  [
    {"tagid":1,"tagname":"a"},
    {"tagid":2,"tagname":"b"}
   ]
  ```

### getTag(tagid)


## CHANGELOG

### 1.0.0
- 加入debug组件，名称：`wxe-api:error`，`wxe-api:info`;
- getTagList 直接返回taglist。(BREAKING CHANGE);
