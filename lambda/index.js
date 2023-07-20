const Redis = require("ioredis");

const client = new Redis(process.env.REDIS_URL);

exports.handler = async function (event) {
  if (!event.Records) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: "Invalid request",
    };
  }

  event.Records.forEach(async (record) => {
    const body = JSON.parse(record.body);
    const id = body.data.id;
    const randomString = body.data.randomString;

    await client.set(`${randomString}`, id);
  });

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: "success",
  };
};
