import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'storage-group',
    type: 'labeld-group',
    position: { x: 120, y: 820 },
    style: { width: 860, height: 200 },
    data: { label: 'Storage & Monitoring Layer' },
  },
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
    position: { x: 40, y: 40 },
    data: {
      label: 'MongoDB Atlas',
      iconName: 'mongodb',
      iconType: 'local',
    },
    parentId: 'storage-group',
    extent: 'parent',
  },
  {
    id: 'cache',
    type: 'custom-square',
    position: { x: 260, y: 40 },
    data: {
      label: 'Redis Cache',
      iconName: 'redis',
      iconType: 'local',
    },
    parentId: 'storage-group',
    extent: 'parent',
  },
  {
    id: 'cloudwatch',
    type: 'custom-square',
    position: { x: 480, y: 40 },
    data: {
      label: 'CloudWatch Logs',
      iconName: 'aws/CloudwatchLogs',
      iconType: 'local',
    },
    parentId: 'storage-group',
    extent: 'parent',
  },
  {
    id: 's3',
    type: 'custom-square',
    position: { x: 700, y: 40 },
    data: {
      label: 'S3 Storage',
      iconName: 'aws/SimpleStorageServiceStandard',
      iconType: 'local',
    },
    parentId: 'storage-group',
    extent: 'parent',
  },
];
