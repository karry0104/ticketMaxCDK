const AWS = require("aws-sdk");

exports.handler = async function (event) {
  const id = event.pathParameters.id;
  console.log("event" + event);
  console.log("id" + id);

  try {
    const sqs = new AWS.SQS({ region: "ap-northeast-1" });

    const queueUrl = `https://sqs.ap-northeast-1.amazonaws.com/649086394704/mes${id}.fifo`;

    const attributeParams = {
      QueueUrl: queueUrl,
      AttributeNames: ["ApproximateNumberOfMessages"],
    };

    const data = await sqs.getQueueAttributes(attributeParams).promise();
    const attributes = data.Attributes;

    if (attributes) {
      const messages = attributes.ApproximateNumberOfMessages;

      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },

        body: JSON.stringify({ messages }),
      };

      return response;
    }
  } catch (err) {
    console.log("Error getting queue attributes:", err);
  }
};
