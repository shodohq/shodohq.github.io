import { describe, expect, it } from "vitest";

import { KIND_VALUES, PRODUCT_VALUES, TOPIC_VALUES, makeContactFormSchema } from "./contact.schema";

const contactFormSchema = makeContactFormSchema("en");

const validInput = {
  kind: "kind1" as const,
  product: "p1name" as const,
  topics: ["topic1", "topic3"] as const,
  name: "山田 太郎",
  org: "株式会社サンプル",
  role: "情報セキュリティ 部長",
  email: "taro@example.com",
  message: "PoCについて相談したいです。",
};

describe("contactFormSchema", () => {
  describe("valid input", () => {
    it("accepts the canonical valid input", () => {
      const result = contactFormSchema.safeParse(validInput);
      expect(result.success).toBe(true);
    });

    it("accepts empty role (optional)", () => {
      const result = contactFormSchema.safeParse({ ...validInput, role: "" });
      expect(result.success).toBe(true);
    });

    it("accepts empty topics (none selected)", () => {
      const result = contactFormSchema.safeParse({ ...validInput, topics: [] });
      expect(result.success).toBe(true);
    });

    it("accepts all valid kind values", () => {
      for (const kind of KIND_VALUES) {
        const result = contactFormSchema.safeParse({ ...validInput, kind });
        expect(result.success, `kind=${kind}`).toBe(true);
      }
    });

    it("accepts all valid product values", () => {
      for (const product of PRODUCT_VALUES) {
        const result = contactFormSchema.safeParse({ ...validInput, product });
        expect(result.success, `product=${product}`).toBe(true);
      }
    });

    it("accepts any combination of topic values", () => {
      for (const topic of TOPIC_VALUES) {
        const result = contactFormSchema.safeParse({ ...validInput, topics: [topic] });
        expect(result.success, `topic=${topic}`).toBe(true);
      }
    });
  });

  describe("required fields", () => {
    it.each(["name", "org", "message"] as const)("rejects when %s is empty", (field) => {
      const result = contactFormSchema.safeParse({ ...validInput, [field]: "" });
      expect(result.success).toBe(false);
    });

    it("rejects when name is missing", () => {
      const { name: _name, ...rest } = validInput;
      const result = contactFormSchema.safeParse(rest);
      expect(result.success).toBe(false);
    });
  });

  describe("email validation", () => {
    it("rejects when email is missing", () => {
      const { email: _email, ...rest } = validInput;
      const result = contactFormSchema.safeParse(rest);
      expect(result.success).toBe(false);
    });

    it("rejects when email is empty", () => {
      const result = contactFormSchema.safeParse({ ...validInput, email: "" });
      expect(result.success).toBe(false);
    });

    it("rejects when email is not a valid address", () => {
      const result = contactFormSchema.safeParse({ ...validInput, email: "not-an-email" });
      expect(result.success).toBe(false);
    });

    it("accepts a valid email", () => {
      const result = contactFormSchema.safeParse({
        ...validInput,
        email: "user+tag@sub.example.co.jp",
      });
      expect(result.success).toBe(true);
    });
  });

  describe("enum validation", () => {
    it("rejects unknown kind", () => {
      const result = contactFormSchema.safeParse({ ...validInput, kind: "kindX" });
      expect(result.success).toBe(false);
    });

    it("rejects unknown product", () => {
      const result = contactFormSchema.safeParse({ ...validInput, product: "unknown" });
      expect(result.success).toBe(false);
    });

    it("rejects unknown topic in array", () => {
      const result = contactFormSchema.safeParse({
        ...validInput,
        topics: ["topic1", "topicBad"],
      });
      expect(result.success).toBe(false);
    });
  });

  describe("i18n error messages", () => {
    it("returns English messages by default", () => {
      const result = makeContactFormSchema("en").safeParse({ ...validInput, name: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        const nameIssue = result.error.issues.find((i) => i.path[0] === "name");
        expect(nameIssue?.message).toBe("This field is required.");
      }
    });

    it("returns Japanese messages when lang=jp", () => {
      const result = makeContactFormSchema("jp").safeParse({ ...validInput, name: "" });
      expect(result.success).toBe(false);
      if (!result.success) {
        const nameIssue = result.error.issues.find((i) => i.path[0] === "name");
        expect(nameIssue?.message).toBe("この項目は必須です。");
      }
    });

    it("email error is translated", () => {
      const en = makeContactFormSchema("en").safeParse({ ...validInput, email: "bad" });
      const jp = makeContactFormSchema("jp").safeParse({ ...validInput, email: "bad" });
      expect(en.success).toBe(false);
      expect(jp.success).toBe(false);
      if (!en.success && !jp.success) {
        const enEmail = en.error.issues.find((i) => i.path[0] === "email");
        const jpEmail = jp.error.issues.find((i) => i.path[0] === "email");
        expect(enEmail?.message).toBe("Please enter a valid email address.");
        expect(jpEmail?.message).toBe("有効なメールアドレスを入力してください。");
      }
    });
  });

  describe("type safety", () => {
    it("exported values match the schema", () => {
      expect(KIND_VALUES).toEqual(["kind1", "kind2", "kind3", "kind4", "kind5"]);
      expect(PRODUCT_VALUES).toEqual(["p1name", "p2name", "product3"]);
      expect(TOPIC_VALUES).toHaveLength(7);
    });
  });
});
