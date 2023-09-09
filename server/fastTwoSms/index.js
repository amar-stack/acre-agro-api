import unirest from "unirest";

export const sendText = async ({ otp, numbers }) => {
  const request = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

  request.query({
    authorization: 'hLDstiHzVmKyMx0UqfZ5ubYg1w9dpo6RSTvl8P7JBWr3n2AF4e2TgFrY3u0hpKwfJQv8e6jkPoHAURda',
    variables_values: otp.toString(),
    route: "otp",
    numbers,
  });

  request.headers({
    "cache-control": "no-cache",
  });

  request.end(function (res) {
    if (res.error) {
      throw new Error(res.error);
    }
  });
};
