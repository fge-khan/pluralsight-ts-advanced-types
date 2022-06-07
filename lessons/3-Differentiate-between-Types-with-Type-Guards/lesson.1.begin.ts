import { Project, TextLayer, ImageLayer, LayerType, Size } from './types';
import { render } from './render';
import { Layer } from '../9-Modelling-Idiomatic-Data-Sources-with-Iterators/types';

const projectSize: Size = {
  width: 512,
  height: 250,
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: '#e8166d',
  id: '10',
  rotation: 0,
  text: 'Advanced TypeScript',
  fontSize: '20px',
};

function setFontSize(layer: TextLayer, value: string | number): void {
  if (typeof value === 'number') {
    layer.fontSize = `${value}px`;
  } else {
    layer.fontSize = value + 'px';
  }
}

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: '20',
  rotation: 0,
  src: 'ps-dark.png',
  maxBounds: { width: projectSize.width },
};

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize,
};

render(project);
