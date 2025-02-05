// import { ExecutionEnvironment } from "@/types/executor";

// import { ExtractTextFromElementTask } from "../task/ExtractTextFromElement";
// import * as cheerio from "cheerio";

// export async function ExtractTextFromElementExecutor(
//   environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
// ): Promise<boolean> {
//   try {
//     const selector = environment.getInput("Html");
//     if (!selector) {
//       return false;
//     }

//     const html = environment.getInput("Html");
//     if (!html) {
//       return false;
//     }

//     const $ = cheerio.load(html);
//     const element = $(selector);

//     if (!element) {
//       console.error("Element not found");
//       return false;
//     }

//     const extractedText = $.text(element);
//     if (!extractedText) {
//       console.error("Element has no text");
//       return false;
//     }

//     environment.setOutput("Extracted text", extractedText);
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/ExtractTextFromElement";
import * as cheerio from "cheerio";

export async function ExtractTextFromElementExecutor(
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> {
  try {
    const html = environment.getInput("Html");
    const selector = environment.getInput("Selector");

    if (!html || !selector) {
      console.error("Invalid HTML or selector input");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element.length) {
      console.error("Element not found");
      return false;
    }

    const extractedText = element.text().trim();
    if (!extractedText) {
      console.error("Element has no text");
      return false;
    }

    environment.setOutput("Extracted text", extractedText);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
