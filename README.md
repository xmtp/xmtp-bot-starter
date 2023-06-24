# XMTP Bot Starter

Hey you wanna make a bot on the XMTP network? Heck yeah. This repo makes that easier.

This project is in pre-preview status.

### Usage

```typescript
// TODO: this isn't actually published yet.
import run from "@xmtp/bot-starter";

// Call `run` with a handler function. The handler function is called
// with a HandlerContext
run(async (context) => {
  // When someone sends your bot a message, you can get the DecodedMessage
  // from the HandlerContext's `message` field
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
});
```

#### Keeping the same address (the `KEY` environment variable)

By default, your bot will have a new address every time you start it up. That's ideal. If you have a private key, you can encode it to a hex string and set the `KEY` environment variable. Your bot will then use this key to connect to the network.

Don't know how to create a private key? Here's how to do it with ethers.js:

```typescript
import { Wallet } from "ethers";

const key = Wallet.createRandom().privateKey;
console.log("Set your environment variable: KEY=" + key);
```

### XMTP Environment (the `XMTP_ENV` environment variable)

By default, the bot connects to the `dev` network. If you want to connect to production, specify `XMTP_ENV=production`.
