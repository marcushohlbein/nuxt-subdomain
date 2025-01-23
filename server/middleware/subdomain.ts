export default defineEventHandler((event) => {
    const hostname = getRequestHeader(event, 'host') || "moin.so"
  
    const mainDomain = ["localhost:3003", "moin.so"]
    const allowedsubdomain = ["app", "test", "api"]

    if (!mainDomain.includes(hostname)) {
      const currentHost =
        process.env.NODE_ENV === "production"
          ? hostname.replace(`.moin.so`, "")
          : hostname.replace(`.localhost:3003`, "")
  
      // Check if subdomain is allowed
      if (!allowedsubdomain.includes(currentHost)) {
        throw createError({
          statusCode: 404,
          statusMessage: "Subdomain not found",
        })
      }

      event.context.subdomain = currentHost
    }
})
