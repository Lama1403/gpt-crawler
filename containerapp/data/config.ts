import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer-portal.zilstg.dev/zilliqa2/",
  match: ["https://developer-portal.zilstg.dev/zilliqa2/**"],// Changed to array
  maxPagesToCrawl: 50,
  outputFileName: "../data/output.json",
  // Other optional or required properties
  // exclude: ["/path/to/exclude"],
  // selector: "body",
  // cookie: { name: "session", value: "xyz" },
};

