export default eventHandler(async (event) => {
  const browser = await hubBrowser();

  const url = getRequestURL(event);
  await browser.page.goto(url.origin, { waitUntil: "domcontentloaded" });

  setHeader(event, "content-type", "application/pdf");

  return browser.page.pdf();
});
