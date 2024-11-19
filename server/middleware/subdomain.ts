export default defineEventHandler((event) => {
    const hostname = getRequestHeader(event, 'host') || "moin.so"
  
    const mainDomain = ["localhost:3000", "moin.so"]
  
    if (!mainDomain.includes(hostname)) {
      const currentHost =
        process.env.NODE_ENV === "production"
          ? hostname.replace(`.moin.so`, "")
          : hostname.replace(`.localhost:3000`, "")
  
      event.context.subdomain = currentHost
    }
  })
