import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  // Frontend Layer
  {
    id: 'react',
    type: 'custom-square',
    position: { x: 160, y: -40 },
    data: {
      label: 'React Frontend',
      iconName: 'react',
      iconType: 'local',
    },
  },
  // API Gateway & Load Balancer Layer
  {
    id: 'api-gateway',
    type: 'custom-square',
    position: { x: 380, y: 240 },
    data: {
      label: 'API Gateway',
      iconName: 'aws/ApiGatewayEndpoint',
      iconType: 'local',
    },
  },
  {
    id: 'load-balancer',
    type: 'custom-square',
    position: { x: 160, y: 240 },
    data: {
      label: 'Application Load Balancer',
      iconName: 'aws/ElasticLoadBalancingApplicationLoadBalancer',
      iconType: 'local',
    },
  },
  // Container & Compute Layer
  {
    id: 'ecs-cluster',
    type: 'custom-square',
    position: { x: 380, y: 560 },
    data: {
      label: 'ECS Cluster',
      iconName: 'aws/ElasticContainerServiceContainer1',
      iconType: 'local',
    },
  },
  {
    id: 'ec2-instances',
    type: 'custom-square',
    position: { x: 160, y: 560 },
    data: {
      label: 'EC2 Auto Scaling',
      iconName: 'aws/Ec2AutoScaling',
      iconType: 'local',
    },
  },
  {
    id: 'lambda',
    type: 'custom-square',
    position: { x: 820, y: 560 },
    data: {
      label: 'Lambda Functions',
      iconName: 'aws/LambdaLambdaFunction',
      iconType: 'local',
    },
  },
  // IAM Layer
  {
    id: 'iam',
    type: 'custom-square',
    position: { x: 600, y: 560 },
    data: {
      label: 'IAM Roles',
      iconName: 'aws/IdentityAccessManagementRole',
      iconType: 'local',
    },
  },
  // Storage, Database & Monitoring Layer
  {
    id: 'database',
    type: 'custom-square',
    position: { x: 160, y: 860 },
    data: {
      label: 'MongoDB Atlas',
      iconName: 'mongodb',
      iconType: 'local',
    },
  },
  {
    id: 'cache',
    type: 'custom-square',
    position: { x: 380, y: 860 },
    data: {
      label: 'Redis Cache',
      iconName: 'redis',
      iconType: 'local',
    },
  },
  {
    id: 'cloudwatch',
    type: 'custom-square',
    position: { x: 600, y: 860 },
    data: {
      label: 'CloudWatch Logs',
      iconName: 'aws/CloudwatchLogs',
      iconType: 'local',
    },
  },
  {
    id: 's3',
    type: 'custom-square',
    position: { x: 820, y: 860 },
    data: {
      label: 'S3 Storage',
      iconName: 'aws/SimpleStorageServiceStandard',
      iconType: 'local',
    },
  },
];
