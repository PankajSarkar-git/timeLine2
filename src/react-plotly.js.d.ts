declare module "react-plotly.js" {
  import * as React from "react";
  import {
    PlotData,
    Layout,
    Config,
    Frame,
    PlotRelayoutEvent,
  } from "plotly.js";

  export interface PlotlyProps {
    data: PlotData[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    frames?: Frame[];
    revision?: number;
    onInitialized?: (
      figure: { data: PlotData[]; layout: Partial<Layout>; frames: Frame[] },
      graphDiv: HTMLElement
    ) => void;
    onUpdate?: (
      figure: { data: PlotData[]; layout: Partial<Layout>; frames: Frame[] },
      graphDiv: HTMLElement
    ) => void;
    onPurge?: (graphDiv: HTMLElement) => void;
    onError?: (err: any) => void;
    onRelayout?: (event: PlotRelayoutEvent) => void;
    debug?: boolean;
    style?: React.CSSProperties;
    useResizeHandler?: boolean;
    className?: string;
    divId?: string;
  }

  const Plot: React.FC<PlotlyProps>;
  export default Plot;
}
