import type { ApolloServerPlugin } from "apollo-server-plugin-base";

export type NRPluginConfig = {
  captureScalars?: boolean;
  captureIntrospectionQueries?: boolean;
  captureServiceDefinitionQueries?: boolean;
  captureHealthCheckQueries?: boolean;
};

declare let NRApolloPlugin: ApolloServerPlugin;

export default function createPlugin(config: NRPluginConfig): ApolloServerPlugin;

