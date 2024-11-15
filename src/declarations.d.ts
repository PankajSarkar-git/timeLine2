declare module "react-plotlyjs" {
  import Plotly from "plotly.js";
  import { Component } from "react";

  interface PlotlyChartProps {
    data: Partial<Plotly.PlotData>[];
    layout?: Partial<Plotly.Layout>;
    config?: Partial<Plotly.Config>;
    onInitialized?: (figure: any) => void;
    onUpdate?: (figure: any) => void;
  }

  export default class PlotlyChart extends Component<PlotlyChartProps> {}
}

declare module "plotly.js" {
  const Plotly: any;
  export default Plotly;
}
