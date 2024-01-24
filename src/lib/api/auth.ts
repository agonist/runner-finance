const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export const challenge = (address: string) => {
  return fetch(`${BASE_URL}/auth/nonce/${address}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.json();
  });
};

export const login = (message: string, signature: string) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
      signature: signature,
    }),
  }).then((res) => {
    return res.json();
  });
};

export const fetchUser = (token: string) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  }).then((res) => {
    return res.json();
  });
};
