import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://developer-portal.zilstg.dev/zilliqa2/",
  match: "https://developer-portal.zilstg.dev/zilliqa2/**",
  maxPagesToCrawl: 50,
  outputFileName: "../data/output.json",
};
