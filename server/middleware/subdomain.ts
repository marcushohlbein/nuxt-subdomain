export default defineEventHandler((event) => {
    const hostname = getRequestHeader(event, 'host') || "keypress.blog"
  
    const mainDomain = ["localhost:3003", "keypress.blog"]
  
    if (!mainDomain.includes(hostname)) {
      const currentHost =
        process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
          ? hostname.replace(`.keypress.blog`, "")
          : hostname.replace(`.localhost:3003`, "")
  
      console.log({ currentHost })
      event.context.subdomain = currentHost
    }
  })