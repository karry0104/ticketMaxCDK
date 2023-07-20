import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as event_sources from "aws-cdk-lib/aws-lambda-event-sources";
import * as IAM from "aws-cdk-lib/aws-iam";

export class SqsCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const queue69 = new sqs.Queue(this, "Mes69Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes69.fifo",
    });

    const queue70 = new sqs.Queue(this, "Mes70Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes70.fifo",
    });

    const queue73 = new sqs.Queue(this, "Mes73Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes73.fifo",
    });

    const queue74 = new sqs.Queue(this, "Mes74Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes74.fifo",
    });

    const queue75 = new sqs.Queue(this, "Mes75Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes75.fifo",
    });

    const queue76 = new sqs.Queue(this, "Mes76Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes76.fifo",
    });

    const queue77 = new sqs.Queue(this, "Mes77Queue", {
      fifo: true,
      visibilityTimeout: cdk.Duration.minutes(10),
      contentBasedDeduplication: true,
      queueName: "mes77.fifo",
    });

    const fn69 = new lambda.Function(this, "Mes69Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn70 = new lambda.Function(this, "Mes70Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn73 = new lambda.Function(this, "Mes73Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn74 = new lambda.Function(this, "Mes74Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn75 = new lambda.Function(this, "Mes75Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn76 = new lambda.Function(this, "Mes76Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const fn77 = new lambda.Function(this, "Mes77Function", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(3),
      handler: "index.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const getSeat = new lambda.Function(this, "getSeat", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(1),
      handler: "getSeat.handler",
      environment: {
        REDIS_URL:
          "redis://ticket-2.f8lhxs.ng.0001.apne1.cache.amazonaws.com:6379",
      },
    });

    const checkCount = new lambda.Function(this, "checkCount", {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset("lambda"),
      timeout: cdk.Duration.minutes(1),
      handler: "checkCount.handler",
    });

    fn69.addEventSource(
      new event_sources.SqsEventSource(queue69, { batchSize: 5 })
    );
    fn70.addEventSource(
      new event_sources.SqsEventSource(queue70, { batchSize: 5 })
    );
    fn73.addEventSource(
      new event_sources.SqsEventSource(queue73, { batchSize: 5 })
    );
    fn74.addEventSource(
      new event_sources.SqsEventSource(queue74, { batchSize: 5 })
    );
    fn75.addEventSource(
      new event_sources.SqsEventSource(queue75, { batchSize: 5 })
    );
    fn76.addEventSource(
      new event_sources.SqsEventSource(queue76, { batchSize: 5 })
    );
    fn77.addEventSource(
      new event_sources.SqsEventSource(queue77, { batchSize: 5 })
    );

    const integrationRole = new IAM.Role(this, "integration-role", {
      assumedBy: new IAM.ServicePrincipal("apigateway.amazonaws.com"),
      roleName: "APIGWtoSQSRole",
    });

    const sendMessageIntegration = new apigateway.AwsIntegration({
      service: "sqs",
      path: `${process.env.CDK_DEFAULT_ACCOUNT}/{id}.fifo`,
      integrationHttpMethod: "POST",
      options: {
        credentialsRole: integrationRole,
        requestParameters: {
          "integration.request.path.id": "method.request.path.id",
          "integration.request.header.Content-Type": `'application/x-www-form-urlencoded'`,
        },
        requestTemplates: {
          "application/json": `#set($dedupId = $context.requestId)#set($groupId = $input.json('$.data.id'))Action=SendMessage&MessageBody=$input.body&MessageGroupId=$groupId&MessageDeduplicationId=$dedupId`,
        },
        integrationResponses: [
          {
            statusCode: "200",
          },
          {
            statusCode: "400",
          },
          {
            statusCode: "500",
          },
        ],
      },
    });

    const queueApi = new apigateway.RestApi(this, "queue");

    const resource = queueApi.root.addResource("{id}");

    resource.addMethod("POST", sendMessageIntegration, {
      requestParameters: {
        "method.request.path.id": true,
      },
      methodResponses: [
        {
          statusCode: "400",
        },
        {
          statusCode: "200",
        },
        {
          statusCode: "500",
        },
      ],
    });

    const api = new apigateway.RestApi(this, "seat");
    const show = api.root.addResource("seat");
    const seatId = show.addResource("{id}");

    const checkApi = new apigateway.RestApi(this, "check");
    const queue = checkApi.root.addResource("queue");
    const queueCount = queue.addResource("{id}");

    queueCount.addMethod("POST", new apigateway.LambdaIntegration(checkCount));
    seatId.addMethod("POST", new apigateway.LambdaIntegration(getSeat));
  }
}
