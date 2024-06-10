import { fetchData } from "../main";

// Mock fetch
global.fetch = jest.fn();

describe("fetchData function", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("should fetch data and return the response body", async () => {
    const mockResponse = { fact: "Cats are great pets.", length: 20 };
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchData();
    expect(result).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("https://catfact.ninja/fact");
  });

  it("should handle fetch errors", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("fetch error"));

    await expect(fetchData()).rejects.toThrow("fetch error");
  });
});
