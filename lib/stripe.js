import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.SRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",

    appInfo: {
        name: "Educonnect",
    }
})