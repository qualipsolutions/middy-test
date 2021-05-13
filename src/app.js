import lambdaHandler1 from "./lambda1";
import lambdaHandler2 from "./lambda2";

(async () => {
  const event = {
    body: {
      userNames: "John",
    },
  };
  const context = {};

  await lambdaHandler1(event, context);
  await lambdaHandler2(event, context);
})();
