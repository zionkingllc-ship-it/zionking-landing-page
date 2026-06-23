const DEFAULT_GRAPHQL_ENDPOINT = "https://api.ziona.app/graphql/";

type ContactBrand = "ZIONA" | "ZIONKING";

type SubmitContactInput = {
  brand: ContactBrand;
  name: string;
  email: string;
  message: string;
  honeypot?: string;
};

type SubmitContactResponse = {
  data?: {
    submitContact?: {
      success: boolean;
      ticketId?: string | null;
      error?: {
        code?: string | null;
        message?: string | null;
      } | null;
    };
  };
  errors?: Array<{ message?: string }>;
};

const SUBMIT_CONTACT_MUTATION = `
  mutation SubmitContact(
    $brand: ContactBrand!,
    $name: String!,
    $email: String!,
    $message: String!,
    $honeypot: String!
  ) {
    submitContact(
      brand: $brand,
      name: $name,
      email: $email,
      message: $message,
      honeypot: $honeypot
    ) {
      success
      ticketId
      error {
        code
        message
      }
    }
  }
`;

export function getContactApiEndpoint(): string {
  const configuredEndpoint = import.meta.env.VITE_GRAPHQL_ENDPOINT?.trim();
  return configuredEndpoint || DEFAULT_GRAPHQL_ENDPOINT;
}

export async function submitContactForm({
  brand,
  name,
  email,
  message,
  honeypot = "",
}: SubmitContactInput): Promise<{ ticketId?: string | null }> {
  const response = await fetch(getContactApiEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: SUBMIT_CONTACT_MUTATION,
      variables: {
        brand,
        name,
        email,
        message,
        honeypot,
      },
    }),
  });

  const payload = (await response.json()) as SubmitContactResponse;
  const mutationResult = payload.data?.submitContact;

  if (!response.ok) {
    throw new Error(
      mutationResult?.error?.message
        || payload.errors?.[0]?.message
        || "Unable to send your message right now. Please try again."
    );
  }

  if (payload.errors?.length) {
    throw new Error(
      payload.errors[0]?.message || "Unable to send your message right now. Please try again."
    );
  }

  if (!mutationResult?.success) {
    throw new Error(
      mutationResult?.error?.message || "Unable to send your message right now. Please try again."
    );
  }

  return { ticketId: mutationResult.ticketId };
}
