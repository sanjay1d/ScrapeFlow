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

//     const extractedText = element.text().trim();
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

    // if (!selector) {
    //   environment.log.error("selector not defined");
    //   return false;
    // }

    // if (!html) {
    //   environment.log.error("html not defined");
    //   return false;
    // }

    if (!html || !selector) {
      // console.error("Invalid HTML or selector input");
      environment.log.error("selector or html not defined");
      return false;
    }

    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      environment.log.error("element html not found");
      return false;
    }

    const extractedText = element.text().trim();
    if (!extractedText) {
      environment.log.error("Element has no text");
      return false;
    }

    environment.setOutput("Extracted text", extractedText);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
