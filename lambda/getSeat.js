const Redis = require("ioredis");

const client = new Redis(process.env.REDIS_URL);

exports.handler = async function (event) {
  const id = event.pathParameters.id;
  const body = JSON.parse(event.body);
  const randomString = body.data.randomString;
  try {
    const checkKey = await client.exists(`${randomString}`);
    const data = {
      checkKey,
    };

    if (checkKey === 0) {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ data }),
      };
    } else {
      const showSeat = await client.get(`showSeat:${id}`);

      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ data, showSeat }),
      };
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ errors: "something error" }),
    };
  }
};
