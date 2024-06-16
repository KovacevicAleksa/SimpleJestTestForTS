import { isChrome } from "../main";

describe("isChrome", () => {
  const originalUserAgent = navigator.userAgent;

  afterEach(() => {
    Object.defineProperty(navigator, "userAgent", {
      value: originalUserAgent,
      writable: true,
    });
  });

  test("should return true for Chrome user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      writable: true,
    });
    expect(isChrome()).toBe(true);
  });

  test("should return false for Firefox user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
      writable: true,
    });
    expect(isChrome()).toBe(false);
  });

  test("should return false for Edge user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.67",
      writable: true,
    });
    expect(isChrome()).toBe(false);
  });

  test("should return false for Safari user agent", () => {
    Object.defineProperty(navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
      writable: true,
    });
    expect(isChrome()).toBe(false);
  });
});
