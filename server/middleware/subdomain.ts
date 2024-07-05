export default defineEventHandler((event) => {
    const hostname = getRequestHeader(event, 'host') || "moin.so"
  
    const mainDomain = ["localhost:3003", "moin.so"]
  
    if (!mainDomain.includes(hostname) && hostname.includes("www")) {
      const currentHost =
        process.env.NODE_ENV === "production"
          ? hostname.replace(`.moin.so`, "")
          : hostname.replace(`.localhost:3003`, "")
  
      console.log({ currentHost })
      event.context.subdomain = currentHost
    }
  })