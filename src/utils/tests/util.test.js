import {getImageUrl} from "../util";

const images = [
  {
    url: "http://image.small",
    height: 200,
  },
  {
    url: "http://image.medium",
    height: 400,
  },
  {
    url: "http://image.large",
    height: 600,
  },
];

describe("util", () => {
  it("should getImageUrl", () => {
    expect(getImageUrl(600, images)).toEqual("http://image.large");
  });

  it("should handle getImageUrl no height matches", () => {
    expect(getImageUrl(500, images)).toEqual("");
  });

  it("should handle getImageUrl null images", () => {
    expect(getImageUrl(500, null)).toEqual("");
  });
})