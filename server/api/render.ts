import { z } from "zod";

export default eventHandler(async (event) => {
  const { locale } = await getValidatedQuery(
    event,
    z.object({
      locale: z.enum(["en", "nl"]).optional().default("en"),
    }).parse
  );

  const browser = await hubBrowser();

  const url = getRequestURL(event);
  await browser.page.goto(`${url.origin}/${locale}`, {
    waitUntil: "domcontentloaded",
  });

  setHeader(event, "content-type", "application/pdf");

  return browser.page.pdf({
    format: "A4",
  });
});
