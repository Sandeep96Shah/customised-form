import React, { FC, PropsWithChildren } from "react";

interface ConditionalRenderProps {
  visible: boolean;
  fallback?: React.ReactNode;
}

const ConditionalRender: FC<PropsWithChildren<ConditionalRenderProps>> = ({
  visible,
  fallback = <></>,
  children,
}) => <>{(visible ? children : fallback)}</>;

export default ConditionalRender;
