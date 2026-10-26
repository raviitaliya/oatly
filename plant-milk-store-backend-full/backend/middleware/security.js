const buckets = new Map();
export const securityHeaders = (req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-XSS-Protection", "0");
    next();
};
export const rateLimit =
    ({
        windowMs = 15 * 60 * 1000,
        max = 300,
        keyGenerator = (req) => req.ip,
    } = {}) =>
        (req, res, next) => {
            const key = keyGenerator(req);
            const now = Date.now();
            let b = buckets.get(key);
            if (!b || now - b.start > windowMs) {
                b = { start: now, count: 0 };
                buckets.set(key, b);
            }
            b.count++;
            res.setHeader("X-RateLimit-Limit", max);
            res.setHeader("X-RateLimit-Remaining", Math.max(0, max - b.count));
            if (b.count > max)
                return res
                    .status(429)
                    .json({
                        success: false,
                        message: "Too many requests, please try again later",
                    });
            next();
        };
export const cleanupRateLimit = () => {
    const cutoff = Date.now() - 30 * 60 * 1000;
    for (const [k, v] of buckets) if (v.start < cutoff) buckets.delete(k);
};
