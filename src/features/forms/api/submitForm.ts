import type { RequestFormSchema } from "../model/schemas";

export async function submitForm(
  formType: "request",
  data: RequestFormSchema & { name?: string }
): Promise<void> {
  const body: Record<string, unknown> = {
    formType,
    data,
  };
  if (formType === "request" && "name" in data && data.name) {
    body.name = data.name;
  }

  const res = await fetch("/api/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const json = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(json?.message ?? "Submission failed");
  }
}

export async function submitRequestForm(
  data: RequestFormSchema,
  name: string
): Promise<void> {
  return submitForm("request", { ...data, name });
}
