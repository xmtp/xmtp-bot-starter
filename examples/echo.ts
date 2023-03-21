import run from '../src/Runner'

run(async (context) => {
  const messageBody = context.message.content
  await context.reply(`ECHO: ${messageBody}`)
})
