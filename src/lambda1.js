// import core
import middy from "@middy/core"; // esm Node v14+
import validator from "@middy/validator";
import jsonBodyParser from "@middy/http-json-body-parser";

const baseHandler = async (event, context, callback) => {
  console.log("Validation passed!");
  return { result: "success" };
};

const inputSchema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        userNames: {
          type: "array",
        },
      },
      required: ["userNames"],
    },
  },
  required: ["body"],
};

const handler = middy(baseHandler)
  .use(jsonBodyParser())
  .use(
    validator({
      inputSchema,
    })
  );
export default handler;
