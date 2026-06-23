import { z } from "zod";

export const KIND_VALUES = ["kind1", "kind2", "kind3", "kind4", "kind5"] as const;

export const PRODUCT_VALUES = ["p1name", "p2name", "product3"] as const;

export const TOPIC_VALUES = [
  "topic1",
  "topic2",
  "topic3",
  "topic4",
  "topic5",
  "topic6",
  "topic7",
] as const;

export type Kind = (typeof KIND_VALUES)[number];
export type Product = (typeof PRODUCT_VALUES)[number];
export type Topic = (typeof TOPIC_VALUES)[number];

export type ContactFormInput = {
  kind: Kind;
  product: Product;
  topics: Topic[];
  name: string;
  org: string;
  role: string;
  email: string;
  message: string;
};

const REQUIRED = {
  jp: "この項目は必須です。",
  en: "This field is required.",
} as const;
const EMAIL_INVALID = {
  jp: "有効なメールアドレスを入力してください。",
  en: "Please enter a valid email address.",
} as const;

export function makeContactFormSchema(lang: "jp" | "en") {
  return z.object({
    kind: z.enum(KIND_VALUES),
    product: z.enum(PRODUCT_VALUES),
    topics: z.array(z.enum(TOPIC_VALUES)),
    name: z.string().min(1, REQUIRED[lang]),
    org: z.string().min(1, REQUIRED[lang]),
    role: z.string(),
    email: z.email(EMAIL_INVALID[lang]),
    message: z.string().min(1, REQUIRED[lang]),
  });
}
