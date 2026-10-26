# Plant Milk Store Backend - Full Version

This version is built **on top of the original backend**. Existing controllers, routes, email verification/reset flows, Cloudinary, Firebase integration, Razorpay, Socket.IO, PDF reports, inventory, analytics, delivery-boy APIs and legacy product/category endpoints are retained.

## Existing APIs retained
- `/api/auth/*`
- `/api/admin/*`
- `/api/payment/*`
- `/api/delivery_boy/*`
- `/api/orders/*`

## Added real-store APIs
- `/api/catalog/*` - product search/filter/pagination, categories, variants
- `/api/cart/*` - cart and stock validation
- `/api/wishlist/*`
- `/api/addresses/*`
- `/api/coupons/*`
- `/api/reviews/*`
- `/api/inventory/*`
- `/api/notifications/*`
- `/api/subscriptions/*`
- `/api/delivery/*` - zones and delivery slots
- `/api/admin/v2/*` - admin catalog/order/dashboard/audit/invoice/refund tools
- `/api/payment/v2/*` - payment lookup, Razorpay webhook and refund processing

## Email system
The original Nodemailer system is retained:
- verification email
- welcome email
- forgot-password email
- password-reset-success email

Configure `EMAIL_USER` and `EMAIL_PASS` in `.env`.

## Setup
1. `npm install`
2. Copy `.env.example` values into `.env` and fill real secrets.
3. If Firebase is needed, provide the service-account JSON through `FIREBASE_SERVICE_ACCOUNT_PATH` or `FIREBASE_SERVICE_ACCOUNT_JSON`.
4. `npm run dev` for development or `npm start` for production-style start.

## Important security note
The original ZIP contained live-looking database, email, Cloudinary, Razorpay and Firebase credentials. They are **not redistributed in this rebuilt ZIP**. Put your credentials in `.env` locally.
