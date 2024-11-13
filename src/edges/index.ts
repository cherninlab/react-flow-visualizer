import type { Edge } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

const COLORS = {
  dataFlow: '#22c55e',
  loadBalancing: '#3b82f6',
  monitoring: '#f97316',
  security: '#8b5cf6',
  storage: '#eab308',
  compute: '#ec4899',
  cache: '#06b6d4',
};

const createMarkerEnd = (color: string) => ({
  type: MarkerType.ArrowClosed,
  width: 20,
  height: 20,
  color: color,
});

export const initialEdges: Edge[] = [
  // Frontend to Load Balancer and API Gateway
  {
    id: 'react-lb',
    source: 'react',
    sourceHandle: 'bottom-c',
    target: 'load-balancer',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.loadBalancing),
    style: { stroke: COLORS.loadBalancing },
    animated: true,
  },
  {
    id: 'react-api',
    source: 'react',
    sourceHandle: 'bottom-r',
    target: 'api-gateway',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.dataFlow),
    style: { stroke: COLORS.dataFlow },
    animated: true,
  },

  // Load Balancer to Compute Layer
  {
    id: 'lb-ec2',
    source: 'load-balancer',
    sourceHandle: 'bottom-c',
    target: 'ec2-instances',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.compute),
    style: { stroke: COLORS.compute },
    animated: true,
  },

  // API Gateway to Compute Layer
  {
    id: 'api-ecs',
    source: 'api-gateway',
    sourceHandle: 'bottom-c',
    target: 'ecs-cluster',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.compute),
    style: { stroke: COLORS.compute },
  },
  {
    id: 'api-lambda',
    source: 'api-gateway',
    sourceHandle: 'bottom-r',
    target: 'lambda',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.compute),
    style: { stroke: COLORS.compute },
  },

  // Compute to Database & Cache Layer
  {
    id: 'ecs-db',
    source: 'ecs-cluster',
    sourceHandle: 'bottom-l',
    target: 'database',
    targetHandle: 'target-top-r',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.storage),
    style: { stroke: COLORS.storage },
  },
  {
    id: 'ecs-cache',
    source: 'ecs-cluster',
    sourceHandle: 'bottom-c',
    target: 'cache',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.cache),
    style: { stroke: COLORS.cache },
  },

  // Lambda to Storage
  {
    id: 'lambda-s3',
    source: 'lambda',
    sourceHandle: 'bottom-c',
    target: 's3',
    targetHandle: 'target-top-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.storage),
    style: { stroke: COLORS.storage },
  },

  // Security Connections
  {
    id: 'iam-ecs',
    source: 'iam',
    sourceHandle: 'left-c',
    target: 'ecs-cluster',
    targetHandle: 'target-right-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.security),
    style: { stroke: COLORS.security, strokeDasharray: '5,5' },
  },
  {
    id: 'iam-lambda',
    source: 'iam',
    sourceHandle: 'right-c',
    target: 'lambda',
    targetHandle: 'target-left-c',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.security),
    style: { stroke: COLORS.security, strokeDasharray: '5,5' },
  },

  // Monitoring Connections
  {
    id: 'ecs-cloudwatch',
    source: 'ecs-cluster',
    sourceHandle: 'bottom-r',
    target: 'cloudwatch',
    targetHandle: 'target-top-l',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.monitoring),
    style: { stroke: COLORS.monitoring },
  },
  {
    id: 'lambda-cloudwatch',
    source: 'lambda',
    sourceHandle: 'bottom-l',
    target: 'cloudwatch',
    targetHandle: 'target-top-r',
    type: 'smoothstep',
    markerEnd: createMarkerEnd(COLORS.monitoring),
    style: { stroke: COLORS.monitoring },
  },
];

export const edgeTypes = {};
