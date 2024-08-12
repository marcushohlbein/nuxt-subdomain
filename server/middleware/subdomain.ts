export default defineEventHandler((event) => {
    const hostname = getRequestHeader(event, 'host') || "nuxt.hohlbein.me"
  
    const mainDomain = ["localhost:3003", "nuxt.hohlbein.me"]
  
    if (!mainDomain.includes(hostname)) {
      const currentHost =
        process.env.NODE_ENV === "production"
          ? hostname.replace(`.nuxt.hohlbein.me`, "")
          : hostname.replace(`.localhost:3003`, "")
  
      event.context.subdomain = currentHost
    }
  })